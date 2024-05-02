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
          <PersonImg src="/frankflores.png" inView={inView} />
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
              <EmailSendImg src="/emailsend.png" />
            </InputContainer>
          </FormContainer>
        </PersonFormContainer>
      </SewMoreContainer>
    </>
  );
};

export default SewMore;
