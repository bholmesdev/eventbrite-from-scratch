/// <reference types="astro/client" />
/// <reference types="simple-stack-form/types" />

type ENV = {
  SERVER_URL: string;
  DB: import("@cloudflare/workers-types").D1Database;
};

type Runtime = import("@astrojs/cloudflare").AdvancedRuntime<ENV>;

declare namespace App {
  interface Locals extends Runtime {}
}
