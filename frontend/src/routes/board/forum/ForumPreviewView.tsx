import { ForumPreview } from "../../../domain/Forum";

export interface ForumPreviewProps {
  forum: ForumPreview;
}

export const ForumPreviewView: React.FC<ForumPreviewProps> = (
  props: ForumPreviewProps
) => {
  return <p>{props.forum.name}</p>;
};
