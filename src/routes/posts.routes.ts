import { CreatePostController } from "@modules/posts/useCases/createPost/createPostUseController";
import { DeletePostController } from "@modules/posts/useCases/deletePost/deletePostController";
import { ListAllPostsController } from "@modules/posts/useCases/listAllPosts/listAllPostsController";
import { UpdatePostcontroller } from "@modules/posts/useCases/updatePost/updatePostController";
import { Router } from "express";
import { authentication } from "src/middlewares/authentication";

const postRoutes = Router();

postRoutes.get("/", new ListAllPostsController().handle);

postRoutes.use(authentication);

postRoutes.post("/", new CreatePostController().handle);
postRoutes.put("/:id", new UpdatePostcontroller().handle);

postRoutes.delete("/:id", new DeletePostController().handle);

export { postRoutes };
