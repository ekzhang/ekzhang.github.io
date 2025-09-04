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
  title="__bool__ Dunder - Alex Wang"
  description="Understanding Python's __bool__ dunder method for truthiness evaluation"
/>

<article class="layout-md py-12 mx-auto max-w-3xl px-6">
  <div class="mb-8">
    <a href="/python" class="text-blue-600 hover:underline text-sm"
      >← Back to Python</a
    >
  </div>

  <h1 class="text-3xl font-bold mb-4">__bool__ Dunder</h1>

  <div class="text-sm text-neutral-500 mb-8">December 3, 2024 • 6 min read</div>

  <div class="text-lg text-neutral-700 mb-8 leading-relaxed">
    Understanding Python's __bool__ dunder method for truthiness evaluation in
    custom classes. Learn how to make your objects work naturally with if
    statements and boolean operations.
  </div>

  <div class="prose prose-neutral max-w-none">
    <p>
      Let's say for example you are building a cache class and you want to
      operate on this cache class. However, you want to fetch some user from the
      cache, only if it's there, but you're having problems with this.
    </p>

    <pre><code class="language-python"
        >class SimpleCache:
    def __init__(self):
        self._data = {"{}"}
    def set(self, key, value):
        self._data[key] = value
    def get(self, key, default=None):
        return self._data.get(key, default)
…

def fetch_user(cache, user_id):
    if not cache:  # natural, just like a dict or list
        print("Cache empty, querying DB...")
        data = {"{"}\"id\": user_id, \"name\": \"Alex\"'}'}
        cache.set(user_id, data)
    else:
        print("Using cache")
    return cache.get(user_id)</code
      ></pre>

    <p>
      One core component of idiomatic python is evaluating truthfulness of
      objects in a Boolean way when using things like <code>if</code>,
      <code>while</code>, and <code>not</code>. For lots of existing types we
      see existing false groups:
    </p>

    <ul>
      <li>Constants such as <code>None</code> and <code>False</code></li>
      <li>Zero of any type</li>
      <li>Empty Sequence/collections</li>
    </ul>

    <p>As well as existing True objects like:</p>

    <ul>
      <li>
        Non-zero numbers: <code>1</code>, <code>-2</code>, <code>0.5</code>,
        <code>1+0j</code>
      </li>
      <li>
        Non-empty strings: <code>"0"</code>, <code>"False"</code>,
        <code>" "</code>, <code>"hello"</code>
      </li>
      <li>
        Non-empty collections: <code>[0]</code>, <code>(None,)</code>,
        <code>{"{"}0{"}"}</code>, <code>{"{"}\"k\": 1{"}"}</code>,
        <code>{"{"}1{"}"}</code>, <code>range(1)</code>
      </li>
      <li>
        Non-empty bytes-like: <code>b"\x00"</code>,
        <code>bytearray(b"\x00")</code>, <code>memoryview(b"x")</code>
      </li>
      <li>Objects & callables</li>
    </ul>

    <p>
      For our custom object that we create, Python uses <code>__bool__</code>
      (or <code>__len__</code> if <code>__bool__</code> doesn't exist) to determine
      object truthfulness.
    </p>

    <p>
      <code>__bool__</code> is a dunder (double underscore) which basically
      means it's a special function used to define your own python operations.
      Other examples include the widely used <code>__init__</code>,
      <code>__len__</code>, and <code>__str__</code> or other operators.
    </p>

    <p>
      To use it, we want to return <code>True</code> or <code>False</code> based
      on if the instance of that class is should be empty or not a valid instance
      such as in the example that a cache has no data then:
    </p>

    <pre><code class="language-python"
        >class SimpleCache:
    def __init__(self):
        self._data = {"{}"}

    def set(self, key, value):
        self._data[key] = value

    def get(self, key, default=None):
        return self._data.get(key, default)

    def __bool__(self):
        return len(self._data) > 0

# Now this function works perfectly!
def fetch_user(cache, user_id):
    if not cache:  # natural, just like a dict or list
        print("Cache empty, querying DB...")
        data = {"{"}\"id\": user_id, \"name\": \"Alex\"'}'}
        cache.set(user_id, data)
    else:
        print("Using cache")

    return cache.get(user_id)</code
      ></pre>

    <h2>Advantages of This Approach</h2>

    <ul>
      <li>
        <strong>Readability:</strong> Conditions like <code>if not cache:</code>
        are natural and concise when emptiness means "no useful state".
      </li>
      <li>
        <strong>Simplified conditionals:</strong> You avoid sprinkling
        <code>len(cache._data) == 0</code>
        or <code>not cache._data</code> throughout the codebase.
      </li>
      <li>
        <strong>Encapsulation & consistency:</strong> One canonical definition of
        "empty/invalid" lives in the class, preventing ad-hoc checks that drift over
        time.
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
