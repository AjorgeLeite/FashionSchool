import {
  FormContainer,
  PersonFormContainer,
  PersonImg,
  Rectangle,
  SewMoreContainer,
  FormTitle,
  Divider,
  DividerSubscribeContainer,
  Subscribe,
  EmailInput,
  EmailSendImg,
  InputContainer,
} from "./SewMore.styles";
import { useInView } from "react-intersection-observer";

const SewMore = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <SewMoreContainer ref={ref}>
        <Rectangle />
        <PersonFormContainer>
          <PersonImg src="https://github.com/AjorgeLeite/FashionSchool/blob/main/public/frankflores.png?raw=true" inView={inView} />
          <FormContainer inView={inView}>
            <FormTitle inView={inView}>
              Sew Much More Than Just Clothes
            </FormTitle>
            <DividerSubscribeContainer inView={inView}>
              <Divider />
              <Subscribe>Sign our newsletter</Subscribe>
            </DividerSubscribeContainer>
            <InputContainer inView={inView}>
              <EmailInput type="email" placeholder="Your Email" />
              <EmailSendImg src="https://github.com/AjorgeLeite/FashionSchool/blob/main/public/emailsend.png?raw=true" />
            </InputContainer>
          </FormContainer>
        </PersonFormContainer>
      </SewMoreContainer>
    </>
  );
};

export default SewMore;
