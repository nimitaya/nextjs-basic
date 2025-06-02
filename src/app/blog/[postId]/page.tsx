const PostIdPage = async ({
  params,
}: {
  params: Promise<{ postId: string }>;
}) => {
  const postId = (await params).postId;

  return (
    <div>
      <h1 className="text-5xl font-bold">Blog</h1>
      <h2 className="text-3xl font-bold">
        Post about <span className="text-rose-700 uppercase">{postId}</span>
      </h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
        mollitia tempore a. Modi, officiis expedita nemo assumenda adipisci
        dolorum dolores facilis unde error tempora nam laudantium sed repellat
        provident excepturi aliquam vitae numquam, sint libero. Recusandae illum
        obcaecati ad delectus molestiae quia eos consequuntur incidunt
        praesentium! Atque, iure impedit dignissimos delectus alias excepturi
        officiis tempore quis perspiciatis reiciendis iusto, quibusdam placeat
        autem! Porro deleniti necessitatibus voluptatibus exercitationem
        possimus unde iste reiciendis, molestiae quasi aliquid. Quia
        perferendis, impedit aut debitis odit laudantium minus alias, id
        similique adipisci dolores eos aliquid velit sapiente laborum nisi atque
        facilis voluptatem consequuntur mollitia ullam. Quo perspiciatis maxime
        aliquid qui explicabo, aspernatur, nemo vitae velit ad veniam, dolore
        modi consectetur ex neque eos quaerat cupiditate doloribus laboriosam
        doloremque dolorem incidunt cumque. Adipisci ex aliquid nesciunt,
        tenetur placeat soluta necessitatibus iusto asperiores hic blanditiis
        culpa similique velit quae, sit ducimus. Vitae id modi quam aperiam
        sequi tenetur libero quidem vel? Odio unde quisquam doloribus laboriosam
        adipisci vitae, voluptate quasi expedita aspernatur saepe corporis qui
        labore modi iusto totam ea, laborum quidem vero magnam ratione. Quas
        repellat natus, voluptates praesentium veritatis, vitae ducimus error
        beatae repellendus maxime expedita voluptate. Commodi reiciendis sequi
        ad officiis suscipit cupiditate tenetur illum?
      </p>
    </div>
  );
};
export default PostIdPage;
