import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import BeiAnSite from '@/components/BeiAnSite'
import CopyRightDate from '@/components/CopyRightDate'
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'
import { decryptEmail, handleEmailClick } from '@/lib/plugins/mailEncrypt'
import { useRef } from 'react'
import CanvasEmail from '@/components/CanvasEmail'

/**
 * 页脚
 * @param {*} param0
 * @returns
 */
const Footer = props => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear
  const { categoryOptions, customMenu } = props

  const CONTACT_EMAIL = siteConfig('CONTACT_EMAIL')

  const emailIcon = useRef(null)

  return (
    <footer
      id='footer-wrapper'
      className='relative bg-[#2A2A2A] justify-center w-full leading-6 text-gray-300 text-sm md:p-10'>
      <div id='footer-container' className='w-full mx-auto max-w-screen-xl'>
        <div className='flex'>
          {/* 页脚左侧菜单组 */}
          <div className='hidden md:flex flex-grow my-6 space-x-20 text-lg  '>
            {/* 分类菜单  */}
            <div>
              <div className='font-bold mb-4 text-white'>
                {siteConfig(
                  'COMMERCE_TEXT_FOOTER_MENU_1',
                  'Product Center',
                  CONFIG
                )}
              </div>
              <nav
                id='home-nav-button'
                className={'flex flex-col space-y-2 text-start'}>
                {categoryOptions?.map(category => {
                  return (
                    <SmartLink
                      key={`${category.name}`}
                      title={`${category.name}`}
                      href={`/category/${category.name}`}
                      passHref>
                      {category.name}
                    </SmartLink>
                  )
                })}
              </nav>
            </div>

            {/* 系统菜单  */}
            <div>
              <div className='font-bold mb-4 text-white'>
                {siteConfig('COMMERCE_TEXT_FOOTER_MENU_2', 'About US', CONFIG)}
              </div>
              <nav
                id='home-nav-button'
                className={'flex flex-col space-y-2 text-start'}>
                {customMenu?.map(menu => {
                  return (
                    <SmartLink
                      key={`${menu.name}`}
                      title={`${menu.name}`}
                      href={`${menu.href}`}
                      passHref>
                      {menu.name}
                    </SmartLink>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* 页脚右侧联系方式 */}
          {
            <div className='md:border-l pl-8 space-x-8 border-gray-600 flex flex-grow'>
              {/* 电话邮箱等 */}
              <div className='my-6 whitespace-pre-line text-left'>
                <div className='font-bold text-l text-white mb-6'>
                  {siteConfig(
                    'COMMERCE_TEXT_FOOTER_TITLE',
                    'Contact US',
                    CONFIG
                  )}
                </div>
                <div className='space-y-4'>
                  <div className='flex space-x-4 text-2xl'>
                    {JSON.parse(
                      siteConfig(
                        'COMMERCE_CONTACT_WHATSAPP_SHOW',
                        null,
                        CONFIG
                      ),
                      true
                    ) && (
                      <div>
                        {
                          <a
                            target='_blank'
                            rel='noreferrer'
                            href={siteConfig('CONTACT_WHATSAPP', '#', CONFIG)}
                            title={'telegram'}>
                            <i className='transform hover:scale-125 duration-150 fa-brands fa-whatsapp dark:hover:text-red-400 hover:text-red-600' />
                          </a>
                        }
                      </div>
                    )}

                    {JSON.parse(
                      siteConfig('COMMERCE_CONTACT_TELEGRAM_SHOW', true, CONFIG)
                    ) && (
                      <div>
                        {
                          <a
                            target='_blank'
                            rel='noreferrer'
                            href={siteConfig('CONTACT_TELEGRAM', '#', CONFIG)}
                            title={'telegram'}>
                            <i className='transform hover:scale-125 duration-150 fab fa-telegram dark:hover:text-red-400 hover:text-red-600' />
                          </a>
                        }
                      </div>
                    )}
                  </div>
                  <div className='text-lg'>
                    {' '}
                    {CONTACT_EMAIL && (
                      <a
                        onClick={e =>
                          handleEmailClick(e, emailIcon, CONTACT_EMAIL)
                        }
                        title='email'
                        className='cursor-pointer'
                        ref={emailIcon}>
                        <i className='transform hover:scale-125 duration-150 fas fa-envelope dark:hover:text-red-400 hover:text-red-600' />{' '}
                        <CanvasEmail email={decryptEmail(CONTACT_EMAIL)} />
                      </a>
                    )}
                  </div>
                  <div className='text-lg'>
                    {' '}
                    {siteConfig('CONTACT_PHONE', null) && (
                      <div>
                        <i className='transform hover:scale-125 duration-150 fas fa-user dark:hover:text-red-400 hover:text-red-600' />{' '}
                        {siteConfig('CONTACT_PHONE', null)}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* 页脚右侧图片二维码和文字描述 */}
              {
                <div className=' border-gray-600 my-6 whitespace-pre-line text-center'>
                  <div className='font-bold text-l text-white mb-6 text-center'>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className='h-36'
                      src={siteConfig(
                        'COMMERCE_FOOTER_RIGHT_IMG_URL',
                        null,
                        CONFIG
                      )}></img>
                  </div>
                  <div className='space-y-4'>
                    <div
                      className='flex space-x-4 text-center'
                      dangerouslySetInnerHTML={{
                        __html: siteConfig(
                          'COMMERCE_FOOTER_RIGHT_TEXT',
                          '',
                          CONFIG
                        )
                      }}></div>
                  </div>
                </div>
              }
            </div>
          }
        </div>

        {/* 底部版权相关 */}
        <div
          id='footer-copyright-wrapper'
          className='flex flex-col md:flex-row justify-between border-t border-gray-600 pt-8 px-4 md:px-0'>
          <div className='text-start space-y-1'>
            {/* 网站所有者 */}
            <div>
              <CopyRightDate />
            </div>

            {/* 技术支持 */}
            <div className='text-xs text-light-500 dark:text-gray-700'>
              Powered by{' '}
              <a
                href='https://github.com/tangly1024/NotionNext'
                className='dark:text-gray-300'>
                NotionNext {siteConfig('VERSION')}
              </a>
              .
            </div>

            {/* 站点统计 */}
            <div>
              <span className='hidden busuanzi_container_site_pv'>
                <i className='fas fa-eye' />
                <span className='px-1 busuanzi_value_site_pv'> </span>{' '}
              </span>
              <span className='pl-2 hidden busuanzi_container_site_uv'>
                <i className='fas fa-users' />{' '}
                <span className='px-1 busuanzi_value_site_uv'> </span>{' '}
              </span>
            </div>
          </div>

          {/* 右边公司名字 */}
          <div className='md:text-right'>
            <h1 className='text-xs pt-4 text-light-400 dark:text-gray-400'>
              {siteConfig('TITLE')} {siteConfig('BIO')}
            </h1>
            <h2> {siteConfig('DESCRIPTION')}</h2>
            {/* 可选备案信息 */}
            <div className='flex flex-wrap'>
              <BeiAnSite />
              <BeiAnGongAn />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

 

import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import CopyRightDate from '@/components/CopyRightDate'
import PoweredBy from '@/components/PoweredBy'
import { siteConfig } from '@/lib/config'
import SocialButton from './SocialButton'
/**
 * 页脚
 * @returns
 */
const Footer = () => {
  const BEI_AN = siteConfig('BEI_AN')
  const BEI_AN_LINK = siteConfig('BEI_AN_LINK')
  const BIO = siteConfig('BIO')
  return (
    <footer className='relative flex-shrink-0 bg-white dark:bg-[#1a191d] justify-center text-center m-auto w-full leading-6  text-gray-600 dark:text-gray-100 text-sm'>
      {/* 颜色过度区 */}
      <div
        id='color-transition'
        className='h-32 bg-gradient-to-b from-[#f7f9fe] to-white  dark:bg-[#1a191d] dark:from-inherit dark:to-inherit'
      />

      {/* 社交按钮 */}
      <div className='w-full h-24'>
        <SocialButton />
      </div>

      <br />

      {/* 底部页面信息 */}
      <div
        id='footer-bottom'
        className='w-full h-20 flex flex-col p-3 lg:flex-row justify-between px-6 items-center bg-[#f1f3f7] dark:bg-[#21232A] border-t dark:border-t-[#3D3D3F]'>
        <div id='footer-bottom-left' className='text-center lg:text-start'>
          <PoweredBy /> 
          <div className='flex gap-x-1'>
            <CopyRightDate />
            <a
              href={'/about'}
              className='underline font-semibold dark:text-gray-300 '>
              {siteConfig('AUTHOR')}
            </a>
            {BIO && <span className='mx-1'> | {BIO}</span>}
          </div>
        </div>

        <div id='footer-bottom-right'>
          {BEI_AN && (
            <>
              <i className='fas fa-shield-alt' />{' '}
              <a href={BEI_AN_LINK} className='mr-2'>
                {siteConfig('BEI_AN')}
              </a>
            </>
          )}
          <BeiAnGongAn />

          <span className='hidden busuanzi_container_site_pv'>
            <i className='fas fa-eye' />
            <span className='px-1 busuanzi_value_site_pv'> </span>{' '}
          </span>
          <span className='pl-2 hidden busuanzi_container_site_uv'>
            <i className='fas fa-users' />{' '}
            <span className='px-1 busuanzi_value_site_uv'> </span>{' '}
          </span>

          {/* <h1 className='text-xs pt-4 text-light-400 dark:text-gray-400'>{title} {siteConfig('BIO') && <>|</>} {siteConfig('BIO')}</h1> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
