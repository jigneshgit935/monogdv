import EditTopicForm from '@/components/EditTopicForm';

const getProductById = async (id) => {
  const apiUrl = process.env.API_URL;
  try {
    const res = await fetch(`${apiUrl}/api/products/${id}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch topic');
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const { product } = await getProductById(id);
  const { name, price, color, company, category } = product;
  return (
    <EditTopicForm
      id={id}
      name={name}
      price={price}
      color={color}
      company={company}
      category={category}
    />
  );
}
