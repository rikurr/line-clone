CREATE TABLE "public"."message"("id" serial NOT NULL, "content" text NOT NULL, "created_at" timestamptz NOT NULL, "sender_id" text NOT NULL, "chat_id" integer NOT NULL, PRIMARY KEY ("id") );
