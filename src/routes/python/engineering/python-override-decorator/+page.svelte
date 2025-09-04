<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import { onMount } from 'svelte';
  
  let highlightLoaded = false;
  
  onMount(async () => {
    // Load Prism for syntax highlighting
    if (typeof window !== 'undefined' && !(window as any).Prism) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css';
      document.head.appendChild(link);
      
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js';
      script.onload = () => {
        const pythonScript = document.createElement('script');
        pythonScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js';
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
  title="Python's @override Decorator - Alex Wang"
  description="Learn how Python 3.12's @override decorator prevents inheritance bugs and makes your code more maintainable"
/>

<article class="layout-md py-12 mx-auto max-w-3xl px-6">
  <div class="mb-8">
    <a href="/python" class="text-blue-600 hover:underline text-sm">← Back to Python</a>
  </div>
  
  <h2 class="heading2">Python's @override Decorator</h2>
  
  <div class="text-sm text-neutral-500 mb-8">
    December 3, 2024 • 8 min read
  </div>
  
  <div class="text-lg text-neutral-700 mb-8 leading-relaxed">
    Python's @override decorator is a simple yet powerful tool to catch inheritance bugs 
    before they cause problems in production. Let's explore how this feature works and why you should start using it today.
  </div>

  <div class="prose prose-neutral max-w-none">
    <p>
      You're refactoring a logging system to add file-specific functionality. You have a Logger base class and a FileLogger subclass. 
      You need to override the <code>log()</code> method to handle file-specific logging logic. However, in your haste, you make a typo, 
      naming the method <code>log_to_file()</code> instead of <code>log()</code>.
    </p>
    
    <p>
      Without any checks, your code will run, but the base class's <code>log()</code> method will be called, not your intended override. 
      This can lead to subtle, hard-to-debug bugs, as the parent method may not have the file-writing logic you've implemented.
    </p>

    <pre><code class="language-python">class Logger:
    def log(self, message: str) -> None:
        print(f"LOG: {'{'}message{'}'}")

class FileLogger(Logger):
    # OOPS! Typo here: method name doesn't match base class
    def log_to_file(self, message: str, filename: str) -> None:
        with open(filename, 'a') as f:
            f.write(f"FILE LOG: {'{'}message{'}'}\\n")

# The user's code expects FileLogger.log to be called, but it won't be!
logger = FileLogger()
logger.log("System started.")
# This will print "LOG: System started."
# NOT write to a file as intended!</code></pre>

    <p>
      The <code>@override</code> decorator from the <code>typing</code> module is a simple yet powerful tool for preventing this exact problem. 
      It explicitly marks a method as an intended override of a parent class method.
    </p>
    
    <p>
      If you use <code>@override</code> and the method doesn't actually exist in any of the parent classes, type checkers will raise an error. 
      This turns a silent, insidious bug into an error that you can fix right away. By flagging any misspellings or non-existent overrides, 
      it encourages safer object-oriented programming (OOP) practices by reducing accidental bugs.
    </p>

    <p>Here is a fixed version of that same code:</p>

    <pre><code class="language-python">from typing import override


class Logger:
    def log(self, message: str) -> None:
        print(f"LOG: {'{'}message{'}'}")


class FileLogger(Logger):
    @override  # This will catch the typo!
    def log_to_file(self, message: str, filename: str) -> None:  # Error: no matching method in parent
        with open(filename, 'a') as f:
            f.write(f"FILE LOG: {'{'}message{'}'}\\n")</code></pre>

    <p>Any popular type checker would help notice this and tell you about the error:</p>
    <ul>
      <li><strong>mypy</strong> - Most widely used Python type checker</li>
      <li><strong>pyright/Pylance</strong> - Microsoft's type checker (default in VS Code)</li>
      <li><strong>Pyre</strong> - Meta's type checker</li>
      <li><strong>pytype</strong> - Google's type checker</li>
    </ul>

    <p>The errors would look like this:</p>

    <pre><code class="language-bash"># mypy error: Method "log_to_file" marked with @override does not override anything [misc] 
# pyright/Pylance Method "log_to_file" overrides nothing 
# Pyre Invalid override [40]: `log_to_file` is not defined in base classes of `FileLogger`</code></pre>

    <p>
      Any modern Python development setup with type checking enabled will catch these <code>@override</code> mistakes before your code ever runs, 
      turning silent bugs into immediate, fixable errors.
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
    font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Consolas', monospace;
    color: #e5e7eb;
  }
  
  /* Inline code styling */
  :global(code:not(pre code)) {
    background-color: #f3f4f6;
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    font-size: 0.875em;
    color: #1f2937;
    font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Consolas', monospace;
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