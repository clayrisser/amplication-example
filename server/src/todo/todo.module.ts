import { Module } from "@nestjs/common";
import { TodoModuleBase } from "./base/todo.module.base";
import { TodoService } from "./todo.service";
import { TodoController } from "./todo.controller";
import { TodoResolver } from "./todo.resolver";

@Module({
  imports: [TodoModuleBase],
  controllers: [TodoController],
  providers: [TodoService, TodoResolver],
  exports: [TodoService],
})
export class TodoModule {}
