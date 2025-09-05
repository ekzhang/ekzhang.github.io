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
  title="__slots__ - Alex Wang"
  description="__slots__ for compact and faster object storage"
/>

<article class="layout-md py-12 mx-auto max-w-3xl px-6">
  <div class="mb-8">
    <a href="/python" class="text-blue-600 hover:underline text-sm"
      >← Back to Python</a
    >
  </div>

  <h1 class="text-3xl font-bold mb-4">__slots__</h1>

  <div class="text-sm text-neutral-500 mb-8">December 19, 2025 • 5 min read</div>

  <div class="text-lg text-neutral-700 mb-8 leading-relaxed">
    Optimize memory usage and improve performance with Python's __slots__. Learn how to replace 
    the default __dict__ with a more efficient storage mechanism for class instances.
  </div>

  <div class="prose prose-neutral max-w-none">
    <p>
      Dictionaries are the favorite workhouse of the Pythonic style. Specifically in the cases of classes, 
      instance attributes are stored in a <code>__dict__</code> dunder, which is flexible, but uses a lot of 
      overhead as each instance has its own dictionary. Creating millions of class instances for small objects 
      can thus result in memory/performance issues.
    </p>

    <p>
      Imagine, if you wanted to have a class that stored a datapoint as such:
    </p>

    <pre><code class="language-python">class Point3D:
    def __init__(self, x: float, y: float, z: float) -> None:
        self.x = x
        self.y = y
        self.z = z

point1 = Point3D(1, 2, 3)
point1.__dict__     # This would be {"{"}\"x\": 1, \"y\": 2, \"z\": 3{"}"}</code></pre>

    <p>
      You may think it would be better to accomplish this with the <code>@dataclass</code> decorator, but the underlying 
      implementation of a <code>@dataclass</code> is still a <code>__dict__</code>.
    </p>

    <p>
      <code>__slots__</code> is a memory-efficient alternative to <code>__dict__</code>. When you define 
      <code>__slots__</code>, you declare what attributes an instance has, resulting in a much more efficient 
      storage mechanism. The underlying implementation is a compact C array indexed by slot position.
    </p>

    <pre><code class="language-python">class SlottedPoint3D:
    __slots__ = ("x", "y", "z") 
    
    def __init__(self, x: float, y: float, z: float) -> None:
        self.x = x
        self.y = y
        self.z = z</code></pre>

    <p>
      Python now allocates a fixed amount of memory with slot descriptor objects with pre-defined methods 
      like <code>__get__</code> and <code>__set__</code> which index into the array. This direct memory 
      lookup is faster than a dictionary lookup. You can even use dataclasses with direct slots support 
      (Python 3.10+).
    </p>

    <pre><code class="language-python">from dataclasses import dataclass

@dataclass(slots=True)
class SlottedPoint3D: 
    x: int
    y: int
    z: int</code></pre>

    <p>
      Here is a quick comparison after generating it. Check out the 
      <a href="https://colab.research.google.com/drive/1ShrpitUnbjfoN5_DHuw295Hwmj0QVryA?usp=sharing" 
         class="text-blue-600 hover:underline">link here</a>.
    </p>

    <h2>Memory per object (bytes)</h2>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>dict</th>
            <th>normal</th>
            <th>slots</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>bytes</td>
            <td>424</td>
            <td>584</td>
            <td>152</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Total creation time (seconds)</h2>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>N</th>
            <th>dict</th>
            <th>normal</th>
            <th>slots</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10</td>
            <td>0.000027</td>
            <td>0.000011</td>
            <td>0.000009</td>
          </tr>
          <tr>
            <td>100</td>
            <td>0.000044</td>
            <td>0.000052</td>
            <td>0.000041</td>
          </tr>
          <tr>
            <td>1,000</td>
            <td>0.000322</td>
            <td>0.000501</td>
            <td>0.000397</td>
          </tr>
          <tr>
            <td>10,000</td>
            <td>0.003644</td>
            <td>0.004629</td>
            <td>0.004458</td>
          </tr>
          <tr>
            <td>100,000</td>
            <td>0.047655</td>
            <td>0.053937</td>
            <td>0.047593</td>
          </tr>
          <tr>
            <td>1,000,000</td>
            <td>0.520809</td>
            <td>0.531388</td>
            <td>0.399850</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>Per-object creation time (nanoseconds)</h2>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>N</th>
            <th>dict</th>
            <th>normal</th>
            <th>slots</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10</td>
            <td>2672.10</td>
            <td>1126.80</td>
            <td>858.20</td>
          </tr>
          <tr>
            <td>100</td>
            <td>444.87</td>
            <td>520.00</td>
            <td>410.34</td>
          </tr>
          <tr>
            <td>1,000</td>
            <td>321.81</td>
            <td>500.76</td>
            <td>396.53</td>
          </tr>
          <tr>
            <td>10,000</td>
            <td>364.41</td>
            <td>462.94</td>
            <td>445.79</td>
          </tr>
          <tr>
            <td>100,000</td>
            <td>476.55</td>
            <td>539.37</td>
            <td>475.93</td>
          </tr>
          <tr>
            <td>1,000,000</td>
            <td>520.81</td>
            <td>531.39</td>
            <td>399.85</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      However, there is a tradeoff, here are some differences:
    </p>
    <ul>
      <li>You cannot add more attributes after predefining slots during instantiation.</li>
      <li>You cannot dynamically add attributes.</li>
      <li>You need to redeclare <code>__slots__</code> in subclasses.</li>
      <li>You cannot set class attributes for defaults in <code>__slots__</code> (but you can add class-level constants).</li>
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

  /* Table styling */
  .table-container {
    margin: 1.5rem 0;
    overflow-x: auto;
    display: flex;
    justify-content: center;
  }

  .table-container table {
    border-collapse: collapse;
    background-color: white;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    overflow: hidden;
    min-width: 400px;
  }

  .table-container th {
    background-color: #f3f4f6;
    padding: 0.75rem 1.25rem;
    text-align: center;
    font-weight: 600;
    color: #1f2937;
    border-bottom: 1px solid #e5e7eb;
  }

  .table-container td {
    padding: 0.75rem 1.25rem;
    text-align: center;
    color: #374151;
    border-bottom: 1px solid #f3f4f6;
  }

  .table-container tr:last-child td {
    border-bottom: none;
  }

  .table-container tr:hover td {
    background-color: #f9fafb;
  }

  @media (max-width: 768px) {
    article {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
    
    .table-container table {
      min-width: 100%;
      font-size: 0.875rem;
    }
    
    .table-container th,
    .table-container td {
      padding: 0.5rem 0.75rem;
    }
  }
</style>