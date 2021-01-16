ALTER TABLE "public"."users" ADD COLUMN "name" text;
ALTER TABLE "public"."users" ALTER COLUMN "name" DROP NOT NULL;
