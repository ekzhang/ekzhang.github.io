<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import { onMount } from "svelte";

  let highlightLoaded = false;

  onMount(async () => {
    // Load Prism for syntax highlighting
    if (typeof window !== "undefined" && !(window as any).Prism) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css";
      document.head.appendChild(link);

      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js";
      script.onload = () => {
        const pythonScript = document.createElement("script");
        pythonScript.src =
          "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js";
        pythonScript.onload = () => {
          highlightLoaded = true;
          (window as any).Prism.highlightAll();
        };
        document.head.appendChild(pythonScript);
      };
      document.head.appendChild(script);
    }
  });
</script>

<Seo
  title="Interface Stubs - Alex Wang"
  description="Resolve circular import issues using Python's Abstract Base Classes for cleaner module dependencies"
/>

<article class="layout-md py-12 mx-auto max-w-3xl px-6">
  <div class="mb-8">
    <a href="/python" class="text-blue-600 hover:underline text-sm"
      >← Back to Python</a
    >
  </div>

  <h1 class="text-3xl font-bold mb-4">Interface Stubs</h1>

  <div class="text-sm text-neutral-500 mb-8">January 5, 2025 • 4 min read</div>

  <div class="text-lg text-neutral-700 mb-8 leading-relaxed">
    Learn how to resolve circular import dependencies using Python's Abstract Base Classes (ABC). 
    Create clean module boundaries with interface stubs that break dependency cycles while maintaining type safety.
  </div>

  <div class="prose prose-neutral max-w-none">
    <p>
      Imagine you are building two separate modules, but within each one you declare two different 
      dataclasses as such:
    </p>

    <pre><code class="language-python">@dataclass
class Order:
    user: User
    item: str

@dataclass
class User:
    name: str
    
    def create_order(self, item: str) -> Order:
        return Order(self, item)</code></pre>

    <p>
      However, the only problem is that, if these are in different modules, you'll have a circular 
      import issue due to each class relying on definitions present in the other.
    </p>

    <p>
      To resolve this, create interface stubs with abstract classes for the core data structures and 
      then use them as type hints for the actual concrete class. For the above example, you may create 
      a new file <code>interface.py</code> which contains this implementation:
    </p>

    <pre><code class="language-python">import abc

class IOrder(metaclass=abc.ABCMeta):
    user: 'IUser'
    item: str

class IUser(metaclass=abc.ABCMeta):
    name: str
    
    @abc.abstractmethod
    def create_order(self, item: str) -> IOrder:
        ...</code></pre>

    <p>
      Then you can have the actual concrete class implementations to use said interfaces to allow 
      for modularization in separate files. First, define <code>Order</code> as:
    </p>

    <pre><code class="language-python">from dataclasses import dataclass
from interface import IOrder, IUser

@dataclass
class Order(IOrder):
    user: IUser
    item: str</code></pre>

    <p>
      Then define the <code>User</code> in a separate file as such:
    </p>

    <pre><code class="language-python">from dataclasses import dataclass
from interface import IUser, IOrder

@dataclass
class User(IUser):
    name: str
    
    def create_order(self, item: str) -> IOrder:
        return IOrder(self, item)</code></pre>

    <p>Here are a list of benefits:</p>
    <ul>
      <li>Breaks circular dependencies</li>
      <li>Improves testability with mocking interfaces</li>
      <li>Reduces dependency bloat</li>
      <li>More clearly documented + modularized</li>
    </ul>

    <p>
      This pattern is particularly useful in larger codebases where you have complex relationships 
      between modules. By defining abstract interfaces, you create a contract that both modules can 
      depend on without directly importing each other. This makes your code more maintainable and 
      easier to test, as you can mock the interfaces during unit testing.
    </p>
  </div>

  <div class="border-t pt-8 mt-12">
    <p class="text-sm text-neutral-500">
      Questions or feedback? Feel free to reach out!
    </p>
  </div>
</article>

<style>
  article {
    width: 100%;
    max-width: 48rem; /* 768px */
    margin-left: auto;
    margin-right: auto;
  }

  /* Prose styling for article content */
  :global(.prose) {
    line-height: 1.7;
  }

  :global(.prose p) {
    margin: 1.25rem 0;
    color: #374151;
  }

  :global(.prose h2) {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 2rem 0 1rem 0;
    color: #1f2937;
  }

  :global(.prose ul) {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }

  :global(.prose li) {
    margin: 0.5rem 0;
    color: #374151;
  }

  /* Code block styling for Python syntax highlighting */
  :global(pre) {
    background-color: #2d2d2d !important;
    padding: 1.25rem !important;
    border-radius: 0.5rem !important;
    overflow-x: auto !important;
    margin: 1.5rem 0 !important;
    max-width: 100%;
    border: 1px solid #374151;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  :global(pre code) {
    background: none !important;
    padding: 0 !important;
    font-size: 0.875rem !important;
    line-height: 1.6 !important;
    font-family: "SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Consolas",
      monospace;
    color: #e5e7eb;
  }

  /* Inline code styling */
  :global(code:not(pre code)) {
    background-color: #f3f4f6;
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    font-size: 0.875em;
    color: #1f2937;
    font-family: "SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Consolas",
      monospace;
    border: 1px solid #e5e7eb;
  }

  /* Python syntax highlighting enhancements */
  :global(.token.keyword) {
    color: #c792ea !important;
  }

  :global(.token.string) {
    color: #c3e88d !important;
  }

  :global(.token.function) {
    color: #82aaff !important;
  }

  :global(.token.class-name) {
    color: #ffcb6b !important;
  }

  :global(.token.comment) {
    color: #546e7a !important;
    font-style: italic;
  }

  :global(.token.decorator) {
    color: #f78c6c !important;
  }

  :global(.token.number) {
    color: #f78c6c !important;
  }

  @media (max-width: 768px) {
    article {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }
</style>