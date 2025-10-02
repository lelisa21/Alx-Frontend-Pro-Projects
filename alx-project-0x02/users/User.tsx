import { useState, useRef, FC, FormEvent } from "react";

type userTypes = {
  name: string;
  id: string;
  password: string;
  email: string;
  isStudent: string;
};

const User: FC = () => {
  const [formData, setFormData] = useState<userTypes>({
    name: "",
    id: "",
    email: "",
    password: "",
    isStudent: "",
  });

  const name = useRef<HTMLInputElement>(null);
  const id = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const isStudent = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nameVal = name.current!.value;
    const emailVal = email.current!.value;
    const idVal = id.current!.value;
    const passwordVal = password.current!.value;
    const isStudentVal = isStudent.current!.value;

    setFormData({
      name: nameVal,
      email: emailVal,
      password: passwordVal,
      id: idVal,
      isStudent: isStudentVal,
    });
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Your name" ref={name} />
        <input type="number" placeholder="Enter Your id" ref={id} />
        <input type="password" placeholder="Enter Your password" ref={password} />
        <input type="email" placeholder="Enter Your email" ref={email} />
        <input
          type="text"
          placeholder="are You Student ? Y/N "
          ref={isStudent}
        />
        <button type="submit">Submit</button>
      </form>
      <section className="p-4"> 
        <h1>Welcome {formData.name}</h1>
        <p>Your Id is : {formData.id} </p>
        <p>Password : {formData.password}</p>
        <p>Email : {formData.email}</p>
        <h2>
          {formData.isStudent === "y" || formData.isStudent === "yes"
            ? "you are Student"
            : "you are not Student a Policy Maker"}
        </h2>
      </section>
    </div>
  );
};

export default User;
