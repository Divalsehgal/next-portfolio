import React, { ReactNode } from "react";
import { useKeenSlider, KeenSliderOptions, KeenSliderInstance } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "./styles.module.scss";
import classNames from "classnames";
import Button from "../Button";
import { IconLeftArrow, IconRightArrow } from "../Icons/components";

export interface SlideItem {
  id: string;
  content: ReactNode;
}

export interface KeenSliderProps extends Partial<KeenSliderOptions> {
  /**
   * Array of slide items to render in the slider
   */
  items: SlideItem[];
  /**
   * Additional class name for the slider container
   */
  className?: string;
  /**
   * Number of slides per view
   */
  slidesPerView?: number;
  /**
   * Space between slides
   */
  spacing?: number;
  /**
   * Enable loop
   */
  loop?: boolean;
  /**
   * Enable auto play
   */
  autoplay?: boolean;
  /**
   * Show navigation arrows
   */
  showArrows?: boolean;
  /**
   * Show pagination dots
   */
  showDots?: boolean;
  /**
   * Callback when slide changes
   */
  onSlideChange?: (slider: KeenSliderInstance) => void;
}

export const KeenSlider: React.FC<KeenSliderProps> = ({
  items,
  className,
  slidesPerView = 1,
  spacing = 16,
  loop = false,
  autoplay = false,
  showArrows = true,
  showDots = true,
  onSlideChange,
  ...keenOptions
}) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: slidesPerView,
      spacing,
    },
    loop,
    ...(autoplay && {
      created(s) {
        s.moveToIdx(1, true, { duration: 0 });
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 1, true, { duration: 500 });
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 1, true, { duration: 500 });
      },
    }),
    ...keenOptions,
  }, [
    (slider) => {
      slider.on("slideChanged", () => {
        setCurrentSlide(slider.track.details.rel);
        onSlideChange?.(slider);
      });
    },
  ]);

  React.useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={styles["slider-container"]}>
      <div
        ref={sliderRef}
        className={classNames(
          styles["keen-slider-wrapper"],
          "keen-slider",
          className
        )}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className={classNames(
              "keen-slider__slide",
              styles["keen-slider__slide"]
            )}
          >
            {item.content}
          </div>
        ))}
      </div>

      {loaded && showArrows && instanceRef.current && (
        <>
          <Button
            variant="icon"
            leftIcon={<IconLeftArrow width={32} height={32} />}
            onClick={() => instanceRef.current?.prev()}
            className={classNames(styles["arrow"], styles["arrow--left"], {
              [styles["arrow--disabled"]]: !loop && currentSlide === 0,
            })}
          ></Button>

          <Button
            variant="icon"
            leftIcon={<IconRightArrow width={32} height={32} />}
            onClick={() => instanceRef.current?.next()}
            className={classNames(styles["arrow"], styles["arrow--right"], {
              [styles["arrow--disabled"]]:
                !loop &&
                currentSlide ===
                  instanceRef.current.track.details.slides.length - 1,
            })}
          ></Button>
        </>
      )}

      {loaded && showDots && instanceRef.current && (
        <div className={styles["dots"]}>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={classNames(styles["dot"], {
                [styles["dot--active"]]: currentSlide === idx,
              })}
            >
              <span className="sr-only">Go to slide {idx + 1}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

