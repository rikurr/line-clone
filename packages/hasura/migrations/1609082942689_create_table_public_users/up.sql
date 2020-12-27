CREATE TABLE "public"."users"("id" text NOT NULL, "username" text NOT NULL, "name" text, "picture" text, "created_at" timestamptz NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"), UNIQUE ("username"));
