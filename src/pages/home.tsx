import { useState } from "react";
import { images, videos } from "@/assets";
import { EntertainmentSelector } from "@/components/entertainment-selector";
import { NeonBackground } from "@/components/neon-background";
import { useEntertainment } from "@/hooks/use-entertainment";
import { useLoaderStore } from "@/stores/loader-store";
import type {
  EntertainmentSelectorType,
  EntertainmentType,
} from "@/types/entertainment";

const defaultTitle = "🎲 Gerador Aleatório de Entretenimento";

export const HomePage = () => {
  const loaderStore = useLoaderStore();

  const { getRandomEntertainment, formatEntertainment } = useEntertainment();

  const [entertainmentData, setEntertainmentData] = useState({
    title: defaultTitle,
    link: "",
    image: "",
    video: "",
  });

  const [entertainmentSelectors, setEntertainmentSelectors] = useState<
    EntertainmentSelectorType[]
  >([
    {
      type: "series",
      title: "Séries",
      actionLabel: "📺 Gere uma série aleatória",
      imageSrc: images.seriesLogo,
      backgroundSrc: videos.seriesBackground,
      isOpen: null,
      isHidden: false,
    },
    {
      type: "anime",
      title: "Animes",
      actionLabel: "⛩️ Gere um anime aleatório",
      imageSrc: images.animesLogo,
      backgroundSrc: videos.animesBackground,
      isOpen: null,
      isHidden: false,
    },
    {
      type: "movie",
      title: "Filmes",
      actionLabel: "🎥 Gere um filme aleatório",
      imageSrc: images.moviesLogo,
      backgroundSrc: videos.moviesBackground,
      isOpen: null,
      isHidden: false,
    },
  ]);

  const handleSelectEntertainment = (type: EntertainmentType) => {
    const entertainment = entertainmentSelectors.find(
      (item) => item.type === type,
    );

    if (!entertainment) return;

    setEntertainmentData({
      title: entertainment.actionLabel,
      link: "",
      image: "",
      video: entertainment.backgroundSrc,
    });

    let updatedSelectors = entertainmentSelectors.map((item) => {
      const isClosed = item.isOpen === null ? null : false;
      const isSelected = item.type === type;

      return {
        ...item,
        isOpen: isSelected ? true : isClosed,
        isHidden: !isSelected,
      };
    });

    const selected = updatedSelectors.find((item) => item.type === type);

    if (!selected) return;

    updatedSelectors = updatedSelectors.map((item) => {
      if (selected.isOpen === false) {
        setEntertainmentData({
          title: defaultTitle,
          link: "",
          image: "",
          video: "",
        });

        return {
          ...item,
          isHidden: false,
        };
      }

      if (item.isHidden) {
        return {
          ...item,
          isOpen: null,
        };
      }

      return item;
    });

    setEntertainmentSelectors(updatedSelectors);
  };

  const handleCloseSelector = (type: EntertainmentType) => {
    const entertainment = entertainmentSelectors.find(
      (item) => item.type === type,
    );

    if (!entertainment) return;

    setEntertainmentData({
      title: defaultTitle,
      link: "",
      image: "",
      video: "",
    });

    const updatedSelectors = entertainmentSelectors.map((item) => {
      if (item.type === type) {
        return {
          ...item,
          isOpen: false,
        };
      }

      return {
        ...item,
        isHidden: false,
      };
    });

    setEntertainmentSelectors(updatedSelectors);
  };

  const handleGetRandomEntertainment = async (type: EntertainmentType) => {
    loaderStore.start();

    const entertainment = await getRandomEntertainment(type);

    if (!entertainment) return;

    const { backdrop_path, first_air_date, release_date } = entertainment;

    const isIncompleteResult =
      !backdrop_path || (!first_air_date && !release_date);

    if (isIncompleteResult) {
      await handleGetRandomEntertainment(type);

      return;
    }

    const data = formatEntertainment(type, entertainment);

    setEntertainmentData(data);
  };

  return (
    <>
      {entertainmentData.video && (
        <video
          className="fixed inset-0 w-full min-h-screen object-cover"
          src={entertainmentData.video}
          autoPlay
          loop
          muted
        />
      )}

      {entertainmentData.image && (
        <img
          className="fixed inset-0 w-full h-full object-cover"
          src={entertainmentData.image}
          alt="Imagem de exemplo do resultado gerado"
          onLoad={() => loaderStore.stop()}
          onError={() => loaderStore.stop()}
        />
      )}

      <div className="fixed inset-0 bg-black/70 z-0"></div>

      <div className="relative min-h-screen flex flex-col items-center justify-around p-4 max-s-840:gap-12">
        <header className="z-10">
          <NeonBackground>
            <div className="bg-zinc-900 rounded-xl px-4 py-2 font-semibold flex flex-col gap-4 items-center">
              <span className="bg-indigo-500 rounded px-1 absolute -right-4 -top-2 max-s-840:-right-0 max-s-840:-top-3">
                v3.0
              </span>

              <h1 className="text-3xl text-white text-center max-s-840:text-2xl">
                <a
                  href={entertainmentData.link}
                  target="_blank"
                  rel="noopener"
                  className="hover:animate-pulse"
                >
                  {entertainmentData.title}
                </a>
              </h1>
            </div>
          </NeonBackground>
        </header>

        <div className="relative z-10 flex justify-around items-center w-full max-s-840:flex-col max-s-840:gap-8">
          {entertainmentSelectors.map((data) => (
            <EntertainmentSelector
              {...data}
              onSelect={handleSelectEntertainment}
              onGenerate={handleGetRandomEntertainment}
              onClose={handleCloseSelector}
              key={data.type}
            />
          ))}
        </div>
      </div>
    </>
  );
};
