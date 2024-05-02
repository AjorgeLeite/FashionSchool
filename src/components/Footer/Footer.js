import {
  BlackBar,
  FooterColumn,
  FooterColumnsContainer,
  FooterMainColumn,
  FooterContainer,
  FooterText,
  FooterTitle,
  BlackBarContent,
} from "./Footer.styles";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterColumn>
          <FooterMainColumn>
            <FooterTitle>Fashion School</FooterTitle>
            <FooterText>
              Rua Alfredo Allen, Porto T. +351 222 2222 22 info@fashionschool.pt
            </FooterText>
            <img src="/Frame 50.png" />
          </FooterMainColumn>
        </FooterColumn>
        <FooterColumnsContainer>
          <FooterColumn>
            <FooterText>About Us</FooterText>
            <FooterText>Courses</FooterText>
            <FooterText>Blog</FooterText>
            <FooterText>Contacts</FooterText>
          </FooterColumn>
          <FooterColumn>
            <FooterText>FAQs</FooterText>
            <FooterText>Legal information</FooterText>
            <FooterText>Terms & Conditions</FooterText>
            <FooterText>Privacy Policies</FooterText>
          </FooterColumn>
          <FooterColumn>
            <FooterText>School Management</FooterText>
            <FooterText>PAA</FooterText>
            <FooterText>Digital ORG</FooterText>
          </FooterColumn>
        </FooterColumnsContainer>
      </FooterContainer>
      <BlackBar>
        <BlackBarContent>
          <p>© Fashion School, 2024. All Rights Reserved</p>
          <img src="/LogoFooter.png"></img>
        </BlackBarContent>
      </BlackBar>
    </>
  );
};

export default Footer;