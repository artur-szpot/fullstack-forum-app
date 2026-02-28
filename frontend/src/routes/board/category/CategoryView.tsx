import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import { ApiService } from "../../../api/ApiService";
import { Category } from "../../../domain/Category";
import { ForumPreviewView } from "../forum/ForumPreviewView";

export interface CategoryViewProps {
  category?: Category;
}

interface CategoryViewState {
  isLoading: boolean;
  category: Category | null;
}

export const CategoryView: React.FC<CategoryViewProps> = (
  props: CategoryViewProps
) => {
  const [state, setState] = useState<CategoryViewState>({
    isLoading: false,
    category: props.category || null,
  });
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (props.category) {
      return;
    }

    const loadData = async () => {
      const id = searchParams.get("id");
      if (!id) {
        setState({
          isLoading: false,
          category: null,
        });
        return;
      }
      const data = await ApiService.getCategory(id);
      setState({
        isLoading: false,
        category: data,
      });
    };
    setState({ isLoading: true, category: null });
    loadData();
  }, [props, searchParams]);

  const { isLoading, category } = state;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!category) {
    return <h1>Could not find the requested category.</h1>;
  }

  return (
    <div key={category.id}>
      <h1>{category.name}</h1>
      {category.forums.map((forum) => (
        <ForumPreviewView forum={forum} />
      ))}
    </div>
  );
};
