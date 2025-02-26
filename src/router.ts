import type { FastifyInstance } from "fastify";
import { clientTokenController } from "./controller/client-token-controller";
import {
  createOrderController,
  captureOrderController,
} from "./controller/order-controller";
import { configController } from "./controller/config-controller";
import { setErrorHandler } from "./controller/error-controller";

export default async function router(fastify: FastifyInstance) {
  setErrorHandler(fastify);
  fastify.register(clientTokenController, { prefix: "/api/paypal" });
  fastify.register(createOrderController, { prefix: "/api/paypal" });
  fastify.register(captureOrderController, { prefix: "/api/paypal" });
  fastify.register(configController, { prefix: "/api/paypal" });
}
