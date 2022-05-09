import { useEffect, useRef, useState } from "react";
import { IconName } from "./icons";

interface IProps {
  name: IconName;
}

export default function Icon({ name }: IProps) {
  const ImportedIconRef = useRef<
    React.FC<React.SVGProps<SVGSVGElement>> | any
  >();
  const [loading, setLoading] = useState(false);

  useEffect((): void => {
    const importIcon = async (): Promise<void> => {
      try {
        setLoading(true);
        ImportedIconRef.current = (
          await import(`../../../assets/icons/${name}.svg`)
        ).default;
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return (
      <ImportedIcon
        style={{
          background: "transparent",
        }}
      />
    );
  }

  return <></>;
}
