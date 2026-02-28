import { useEffect, useState } from "react";
import { ApiService } from "../../../api/ApiService";
import { Category } from "../../../domain/Category";
import { CategoryView } from "./CategoryView";

interface CategoriesViewState {
  isLoading: boolean;
  categories: Category[];
}

export const CategoriesView: React.FC<{}> = () => {
  const [state, setState] = useState<CategoriesViewState>({
    isLoading: false,
    categories: [],
  });
  useEffect(() => {
    const loadData = async () => {
      const data = await ApiService.getCategories();
      setState({
        isLoading: false,
        categories: data,
      });
    };
    setState({ isLoading: true, categories: [] });
    loadData();
  }, []);

  const { isLoading, categories } = state;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {categories.map((category) => (
        <CategoryView category={category} />
      ))}
    </>
  );
};
