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
  title="ABC (Abstract Base Classes) - Alex Wang"
  description="Enforce method implementation at instantiation time with Python's ABC"
/>

<article class="layout-md py-12 mx-auto max-w-3xl px-6">
  <div class="mb-8">
    <a href="/python" class="text-blue-600 hover:underline text-sm"
      >← Back to Python</a
    >
  </div>

  <h1 class="text-3xl font-bold mb-4">ABC (Abstract Base Classes)</h1>

  <div class="text-sm text-neutral-500 mb-8">January 3, 2025 • 4 min read</div>

  <div class="text-lg text-neutral-700 mb-8 leading-relaxed">
    Prevent runtime errors by enforcing method implementation at instantiation time 
    with Python's Abstract Base Classes. Learn how to build safer class hierarchies 
    that catch missing methods before they reach production.
  </div>

  <div class="prose prose-neutral max-w-none">
    <p>
      Imagine you are designing a set of class hierarchies where you have a parent 
      class with an "abstract" method that needs to be implemented by subclasses to work.
    </p>

    <p>
      Generally, when you do this, you will use a <code>NotImplementedError</code> in the 
      methods. However there are two major problems:
    </p>
    <ul>
      <li>Declaring the class succeeds even when certain subclass required methods are not implemented.</li>
      <li>Calling that not-yet implemented method of your subclass fails because it wasn't caught at instantiation-time.</li>
    </ul>

    <p>The most common example is something like this:</p>

    <pre><code class="language-python">import abc

class StorageService:
    @abc.abstractmethod
    def save(self, key, value):
        raise NotImplementedError("Subclasses must implement 'save'")
    
    @abc.abstractmethod
    def load(self, key):
        raise NotImplementedError("Subclasses must implement 'load'")

class InMemoryStorage(StorageService):
    def save(self, key, value):
        print(f"[InMemory] Saving {"{"}key{"}"} -> {"{"}value{"}"}")
        # stores it somewhere in memory (fake impl for demo)
        self._data = {"{"}key: value{"}"}

# Instantiation succeeds
store = InMemoryStorage()
store.save("user:1", {"{"}\"name\": \"Alex\"{"}"})

# But calling the missing method fails only at runtime
print(store.load("user:1"))  # NotImplementedError</code></pre>

    <p>
      In the above example, you can still create <code>InMemoryStorage</code> even though 
      <code>load()</code> isn't defined. Only when another engineer (or your API call) 
      tries <code>load()</code> do you hit a <code>NotImplementedError</code> — potentially 
      in production—do you realize this problem.
    </p>

    <h2>The Solution: ABC with ABCMeta</h2>

    <p>
      To resolve this, use the built-in <code>abc.ABCMeta</code> metaclass from <code>abc</code> 
      to define abstract classes. This basically prevents you from instantiating a class at 
      creation time with a <code>TypeError</code>, rather than failing later.
    </p>

    <pre><code class="language-python">import abc
from abc import ABC, abstractmethod

class StorageService(ABC):  # or metaclass=abc.ABCMeta
    @abstractmethod
    def save(self, key, value):
        """Save a value by key"""
        pass
    
    @abstractmethod
    def load(self, key):
        """Load a value by key"""
        pass

class InMemoryStorage(StorageService):
    def save(self, key, value):
        print(f"[InMemory] Saving {"{"}key{"}"} -> {"{"}value{"}"}")
        self._data = {"{"}key: value{"}"}
    # Oops: still forgot load()!

# Instantiation FAILS immediately
store = InMemoryStorage()
# TypeError: Can't instantiate abstract class InMemoryStorage with abstract method load</code></pre>

    <p>
      Now your instantiations will be safe! The <code>TypeError</code> happens at the moment 
      you try to create an instance, not later when you call the missing method. This catches 
      errors during development rather than in production.
    </p>

    <h2>Key Benefits</h2>

    <ul>
      <li><strong>Early error detection:</strong> Missing implementations are caught at instantiation time, not runtime</li>
      <li><strong>Clear contracts:</strong> Abstract methods explicitly define what subclasses must implement</li>
      <li><strong>Better IDE support:</strong> Most IDEs will warn about missing abstract method implementations</li>
      <li><strong>Type checker friendly:</strong> Tools like mypy understand and enforce abstract base classes</li>
    </ul>

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