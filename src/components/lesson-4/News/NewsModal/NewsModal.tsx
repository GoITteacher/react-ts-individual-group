import type { News } from "../../../../types/news";
import { useCloseModal } from "../../../../hooks/useCloseModal";

interface NewsModalProps {
  el: News;
  closeModal: () => void;
}
const NewsModal = ({ el, closeModal }: NewsModalProps) => {
  useCloseModal(closeModal);

  return (
    <div>
      <img src={el.urlToImage} />
      <button onClick={closeModal}>close</button>
    </div>
  );
};

export default NewsModal;
