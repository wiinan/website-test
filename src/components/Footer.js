import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

export default function Footer(){
    const now = new Date()
    return(
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Entre na aventura para receber suas melhores vocações ideais
                </p>
                <p className='footer-subscription-text'>
                    Você pode se desinscrever a qualquer momento
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Your Email' className='footer-input'/>
                        <Button buttonStyle='btn--outline'>Inscreva-se</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Sobre Nos</h2>
                        <Link to='/sign-up'>Como Trabalhar</Link>
                        <Link to='/'>Teste</Link>
                        <Link to ='/'>Carreiras</Link>
                        <Link to='/'>Investir</Link>
                        <Link to='/'>Termos de Serviços</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contato</h2>
                        <Link to='/'>Contato</Link>
                        <Link to='/'>Suporte</Link>
                        <Link to ='/'>Destinos</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Enviar Video</Link>
                        <Link to='/'>Portas</Link>
                        <Link to ='/'>Agencia</Link>
                        <Link to='/'>Influenciadores</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Midias Sociais</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to ='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            TRVL <i className='fab fa-typo3'/>
                        </Link>
                    </div>
                    <small className='website-rights'>TRVL {now.getFullYear()}</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'><i className='fab fa-facebook-f'></i></Link>
                        <Link className='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'><i className='fab fa-instagram'></i></Link>
                        <Link className='social-icon-link youtube' to='/' target='_blank' aria-label='Youtube'><i className='fab fa-youtube'></i></Link>
                        <Link className='social-icon-link twitter' to='/' target='_blank' aria-label='Twitter'><i className='fab fa-twitter'></i></Link>
                        <Link className='social-icon-link linkedin' to='/' target='_blank' aria-label='LinkedIn'><i className='fab fa-linkedin'></i></Link>
                    </div>
                </div>
            </section>
        </div>
    )
}