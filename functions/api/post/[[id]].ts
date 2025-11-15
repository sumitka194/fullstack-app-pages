import post from './data';

export function onRequestGet(context: { params: { id: string } }) {
  const { id } = context.params;
  const idNum = Number.parseInt(id, 10);
  
  if (Number.isNaN(idNum)) {
    return new Response('Invalid post ID', { status: 400 });
  }

  const foundPost = post.find((p) => p.id === idNum);

  if (foundPost) {
    return Response.json(foundPost);
  } else {
    return new Response('Post not found', { status: 404 });
  }
}