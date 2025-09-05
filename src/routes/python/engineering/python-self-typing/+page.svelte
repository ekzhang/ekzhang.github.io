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
  title="Self Typing - Alex Wang"
  description="Understanding Python's Self type hint for better type safety"
/>

<article class="layout-md py-12 mx-auto max-w-3xl px-6">
  <div class="mb-8">
    <a href="/python" class="text-blue-600 hover:underline text-sm"
      >← Back to Python</a
    >
  </div>

  <h1 class="text-3xl font-bold mb-4">Self Typing</h1>

  <div class="text-sm text-neutral-500 mb-8">August 15, 2025 • 6 min read</div>

  <div class="text-lg text-neutral-700 mb-8 leading-relaxed">
    Understanding Python's Self type hint for better type safety and method chaining.
    Learn how to properly annotate methods that return the current instance.
  </div>

  <div class="prose prose-neutral max-w-none">
    <p>
      Imagine you are writing a class that returns the current object in python such as when you want to allow for method-chaining in a sequence of calls, or using a setter-like method. For the type annotations here, two common ways other devs write this is:
    </p>

    <pre><code class="language-python"># String forward reference
class MyBuilder:
    def __init__(self): self.name = ""
    def set_name(self, name: str) -> "MyBuilder":
        self.name = name
        return self
# Bare class name
class MyBuilder:
    def __init__(self): self.name = ""
    def set_name(self, name: str) -> MyBuilder:
        self.name = name
        return self</code></pre>

    <p>
      However, this causes two major problems where:
    </p>

    <ul>
      <li><strong>Refactoring:</strong> The return type of either the string 'MyBuilder' or class name MyBuilder will make refactoring difficult.</li>
      <li><strong>Subclassing:</strong> If you subclass, the return type is incorrect.</li>
    </ul>

    <p>
      Instead, you can import <code>Self</code> as the type annotation as such:
    </p>

    <pre><code class="language-python">from typing import Self  # Python 3.11+ else 'from typing_extensions import Self'
class MyBuilder:
    def __init__(self): self.name = ""
    def set_name(self, name: str) -> Self:
        self.name = name
        return self</code></pre>

    <h2>Advantages of This Approach</h2>

    <ul>
      <li>
        <strong>Refactoring:</strong> No hardcoded class, which means it is resilient to class renaming.
      </li>
      <li>
        <strong>Easier Subclassing:</strong> <code>Self</code> is covariant and dynamically binds to self at runtime. Chain methods will now return the correct subclass type.
      </li>
      <li>
        <strong>Readability:</strong> <code>Self</code> clearly communicates to readers that we are using the same type as the instance.
      </li>
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
