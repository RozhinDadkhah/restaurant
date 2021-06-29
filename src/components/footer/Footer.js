import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FotterContainer, FooterWrap, FooterMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialLink } from './FooterItems'

function Footer() {
    return (
        <FotterContainer>
            <FooterWrap>
                <FooterMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialLink href='/' target='_blank' aria-label='facebook'>
                                <FaFacebook />
                            </SocialLink>
                            <SocialLink href='/' target='_blank' aria-label='instagram'>
                                <FaInstagram />
                            </SocialLink>
                            <SocialLink href='/' target='_blank' aria-label='youtube'>
                                <FaYoutube />
                            </SocialLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </FooterMedia>
            </FooterWrap>
        </FotterContainer>
    )
}

export default Footer
