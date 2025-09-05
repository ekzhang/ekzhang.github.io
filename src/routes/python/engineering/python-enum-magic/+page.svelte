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
  title="Enum Magic - Alex Wang"
  description="Mastering Python's Enum, StrEnum, IntEnum, and Flags for type-safe constants"
/>

<article class="layout-md py-12 mx-auto max-w-3xl px-6">
  <div class="mb-8">
    <a href="/python" class="text-blue-600 hover:underline text-sm"
      >← Back to Python</a
    >
  </div>

  <h1 class="text-3xl font-bold mb-4">Enum Magic</h1>

  <div class="text-sm text-neutral-500 mb-8">September 3, 2025 • 8 min read</div>

  <div class="text-lg text-neutral-700 mb-8 leading-relaxed">
    Mastering Python's Enum, StrEnum, IntEnum, and Flags for type-safe constants and better code organization.
  </div>

  <div class="prose prose-neutral max-w-none">
    <p>
      Imagine you are writing a function that takes in levels of log levels and wants to do something such as printing or notifying specific individuals based on the level. For the sake of simplicity, the levels are info, warning, error:
    </p>

    <pre><code class="language-python">def log(level: str, message: str) -> None:
    ...</code></pre>

    <p>
      If you use <code>str</code> as arguments, you are susceptible to misspellings and potential unreal levels as someone might pass "errror" or "critical". To resolve this, you should use Enum, but preferably use <code>StrEnum</code> (Python 3.11+) with something like this:
    </p>

    <pre><code class="language-python">from enum import StrEnum

class LogLevel(StrEnum):
    INFO = "info"
    WARNING = "warning"
    ERROR = "error"</code></pre>

    <p>
      If, instead, you wanted to use integers to log different levels of warnings you could use <code>IntEnum</code>. This is especially useful if you wanted to do mathematical operations on these values, such as if you wanted to sum the values of total ExitCode's generated.
    </p>

    <pre><code class="language-python">from enum import IntEnum

class LogLevel(IntEnum):
    INFO = 0
    WARNING = 1
    ERROR = 2
    BIGERROR = 3

def log(level: LogLevel, message: str) -> None:
    ...</code></pre>

    <p>
      Or even better, you could use <code>auto()</code> for both <code>StrEnum</code> and <code>IntEnum</code>, this way you can guarantee uniqueness and adding new values is easier. For <code>StrEnum</code>, it represents the value as a lowercase of the real member name.
    </p>

    <pre><code class="language-python">from enum import StrEnum, auto

class LogLevel(StrEnum):
    INFO = auto()     # "info"
    WARNING = auto()  # "warning"
    ERROR = auto()    # "error"
    SUCCESS = auto()  # "success"</code></pre>

    <p>
      For <code>IntEnum</code>, it automatically creates order and generates uniqueness so no need to hardcode, and also makes adding new items easier.
    </p>

    <pre><code class="language-python">from enum import IntEnum, auto

class LogLevel(IntEnum):
    INFO = auto()     # 1
    WARNING = auto()  # 2
    ERROR = auto()    # 3
    SUCCESS = auto()  # 4</code></pre>

    <p>
      Finally, you can also use <code>Flags</code> which are assigned bitwise combinations of values (1, 2, 4, 8, 16). They are useful when you want to represent multiple boolean options at once, and together. To combine these use OR (<code>|</code>) and AND (<code>&</code>) operators.
    </p>

    <pre><code class="language-python">from enum import Flag, auto

class Permission(Flag):
    READ = auto()     # 1
    WRITE = auto()    # 2
    EXECUTE = auto()  # 4

# Give read and write perms to the user
user_perms = Permission.READ | Permission.WRITE</code></pre>

    <h2>Useful Decorators</h2>

    <p>
      A useful decorator would be the <code>@unique</code>, which guarantees that you don't have duplicate values.
    </p>

    <pre><code class="language-python">from enum import Enum, unique

@unique
class Status(Enum):
    OK = 1
    SUCCESS = 1   # ❌ ValueError: duplicate value 1</code></pre>

    <p>
      Another potentially useful decorator for ENUMs is <code>@verify</code> which helps you confirm that your values satisfy a certain set of conditions.
    </p>

    <pre><code class="language-python">from enum import Enum, verify, UNIQUE, CONTINUOUS

@verify(UNIQUE, CONTINUOUS)
class ErrorCode(Enum):
    NOT_FOUND = 1
    TIMEOUT = 2
    UNKNOWN = 3   # ✅ values are unique + continuous (1, 2, 3)</code></pre>

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