import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements'

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About us</FooterLinkTitle>
                <FooterLink to='/'>How it works</FooterLink>
                <FooterLink to='/'>Testimonials</FooterLink>
                <FooterLink to='/'>Careers</FooterLink>
                <FooterLink to='/'>Investors</FooterLink>
                <FooterLink to='/'>Terms of service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Contact us</FooterLinkTitle>
                <FooterLink to='/'>Contact</FooterLink>
                <FooterLink to='/'>Support</FooterLink>
                <FooterLink to='/'>Destinations</FooterLink>
                <FooterLink to='/'>Sponsorship</FooterLink>
                <FooterLink to='/'>News</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Videos</FooterLinkTitle>
                <FooterLink to='/'>Submit video</FooterLink>
                <FooterLink to='/'>Ambassadors</FooterLink>
                <FooterLink to='/'>Agency</FooterLink>
                <FooterLink to='/'>Influencer</FooterLink>
                <FooterLink to='/'>Real talk</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to='/'>Instagram</FooterLink>
                <FooterLink to='/'>Facebook</FooterLink>
                <FooterLink to='/'>Twitter</FooterLink>
                <FooterLink to='/'>Youtube</FooterLink>
                <FooterLink to='/'>LinkedIn</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>

          <SocialMedia>
            <SocialLogo to='/'>Fancy Logo</SocialLogo>
            <WebsiteRights>
              Fancy Logo &copy; {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' area-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' area-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' area-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' area-label='YouTube'>
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  )
}

export default Footer
