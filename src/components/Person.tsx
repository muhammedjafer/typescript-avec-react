import { useState } from "react";
import '../App.css';

export interface Person {
    name: string;
    age: number;
    isMarried: boolean;
}

export const Person = (props: Person) => {
  const [personBio, setPersonBio] = useState<string | null>(null);

  const refillBio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonBio(event.target.value);
  };

  const [show, setShow] = useState<boolean | null>(false);

  const toggleShow = () => {
    setShow((prev) => !prev)
  }

  return (
    <div>
      {
        show && (
          <>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.isMarried ? "yes" : "no"}</p>
          </>
        )
      }

      <div className="flex flex-col gap-2">
        <input onChange={refillBio} type="text" />
        <button onClick={toggleShow}>toggle the show</button>
        <p>{personBio}</p>
      </div>
    </div>
  )
}