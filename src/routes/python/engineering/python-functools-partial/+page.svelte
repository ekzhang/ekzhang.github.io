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
  title="functools.partial - Alex Wang"
  description="functools.partial for elegant function composition and cleaner code"
/>

<article class="layout-md py-12 mx-auto max-w-3xl px-6">
  <div class="mb-8">
    <a href="/python" class="text-blue-600 hover:underline text-sm"
      >← Back to Python</a
    >
  </div>

  <h1 class="text-3xl font-bold mb-4">functools.partial</h1>

  <div class="text-sm text-neutral-500 mb-8">July 20, 2025 • 5 min read</div>

  <div class="text-lg text-neutral-700 mb-8 leading-relaxed">
    Master Python's functools.partial for elegant function composition and
    cleaner code. Learn how to eliminate repetitive function calls and create
    more maintainable codebases.
  </div>

  <div class="prose prose-neutral max-w-none">
    <p>
      You may find yourself in a situation where you need to call the same
      function repeatedly with mostly identical parameters. For instance,
      imagine you're building an application that frequently sends notifications
      through an email service. You might need to send emails with specific
      sender information, SMTP configuration, formatting preferences, retry
      settings, and logging options. This results in you calling the email
      function over and over with the same fixed arguments:
    </p>

    <pre><code class="language-python"
        ># You end up with repetitive calls like this throughout your codebase
send_email(
    smtp_host='smtp.company.com',
    smtp_port=587,
    sender_email='noreply@company.com',
    sender_name='Company Notifications',
    use_tls=True,
    retry_attempts=3,
    retry_delay=30,
    log_level='INFO',
    template_engine='jinja2',
    to_email='user1@example.com',
    subject='Welcome to our service',
    template='welcome_email.html',
    context={"{"}username': 'john_doe'{"}"}
)</code
      ></pre>

    <p>
      This repetition creates several problems: your code becomes <strong
        >verbose</strong
      >
      and <strong>harder to scan</strong>, you're constantly filling in the same
      parameter values, and if you need to change the common settings (like the
      SMTP host or retry configuration), you'd have to hunt down and update
      every single function call. This makes your code less maintainable and
      difficult to read/write.
    </p>

    <pre><code class="language-python"
        >from functools import partial

# Create a partial function with all the common email configuration
company_email = partial(
    send_email,
    smtp_host='smtp.company.com',
    smtp_port=587,
    sender_email='noreply@company.com',
    sender_name='Company Notifications',
    use_tls=True,
    retry_attempts=3,
    retry_delay=30,
    log_level='INFO',
    template_engine='jinja2'
)

# You can also create more specific partials for different use cases
urgent_notification = partial(
    company_email,
    retry_attempts=5,
    retry_delay=10,
    template='urgent_alert.html'
)


# Now your calls become much cleaner and focused.
welcome_email(to_email='newuser@example.com', context={"{"}username': 'jane_smith'{"}"})</code
      ></pre>

    <p>
      <code>functools.partial</code> allows you to "freeze" arguments and keywords,
      creating a simplified function with fewer parameters. When configuration values
      stay constant across multiple calls, partial eliminates the repetitive boilerplate.
    </p>

    <p>This may be useful for:</p>
    <ul>
      <li>API clients with consistent authentication headers</li>
      <li>Database connections with standard timeout and pool settings</li>
      <li>File processors with common parsing configurations</li>
      <li>Test fixtures requiring repeated setup parameters</li>
    </ul>

    <h2>Important Behavior with Mutable vs Immutable Arguments</h2>

    <p>
      When declaring <code>functools.partial</code>, recognize that any
      immutable argument types will use the values declared at creation time,
      while changes to mutable argument types do affect partials.
    </p>

    <pre><code class="language-python"
        ># 1. Immutable vs Mutable behavior
def process_data(base_value, multiplier):
    return base_value * multiplier

# Immutable example - value frozen at creation time
initial_base = 10
multiply_by_base = partial(process_data, initial_base)

initial_base = 20  # This won't affect the partial
print(multiply_by_base(5))  # Output: 50 (still uses 10)

# Mutable example - changes affect the partial
config_dict = {"{"}timeout': 30{"}"}

def connect_database(host, port, config):
    return f"Connecting to {"{"}host{"}"}:{"{"}port{"}"} with timeout {"{"}config['timeout']{"}"}"

db_connector = partial(connect_database, config=config_dict)

config_dict['timeout'] = 60  # This WILL affect the partial
print(db_connector('localhost', 5432))  # Output: "...timeout 60"</code
      ></pre>

    <p>
      <strong>Tip:</strong> Use keyword arguments in your partials for readability.
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
