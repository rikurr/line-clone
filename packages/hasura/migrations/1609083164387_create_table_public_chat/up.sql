CREATE TABLE "public"."chat"("id" serial NOT NULL, "name" text, "picture" text, "create_at" timestamptz NOT NULL, "owner_id" integer, PRIMARY KEY ("id") );
