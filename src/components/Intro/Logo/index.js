import { useEffect, useState } from 'react'
import './index.scss'
import { motion } from 'framer-motion'

const Logo = () => {

  const [showContent, setShowContent] = useState(window.innerWidth >= 1200);

  useEffect(() => {
    const handleResize = () => setShowContent(window.innerWidth >= 1200);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
      <div className="logo-container">
        {showContent && (
          <div>

        <motion.svg 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4, delay: 6 }}
          className="solid-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
          <g transform="translate(.000002 0)">
            <path d="M49.200626,17.028118v273.797042h72.82456l.000004-108.130229L197.303667,290.82516h86.392049L185.143167,154.057589L277.871832,17.028118h-87.065479l-68.781164,99.559586.000001-99.559586h-72.824564Z" transform="translate(.000001 0)" fill="#00f" fillOpacity="0.5" strokeWidth="0.6"/><path d="M36.358486,13.577249l72.953601.172467.071582,100.035936L178.164833,13.607256l86.504181.050525-91.416633,132.972467l97.801817,141.034061-86.39205-.089874L109.383669,179.27218v108.353392l-73.025183-.088546v-273.959777Z" transform="translate(.000002 0.000001)" fill="#64f" stroke="#3f5787" strokeWidth="0.6"/><path d="M40.351382,18.196964l65.10305.009597-.007354,108.69202L180.094039,18.024003l76.231003.207934-88.165043,128.398311l13.382484,19.095679-51.457845,35.781755-24.630206-34.891966-.007354,116.370903h-65.095696v-264.789655Z" transform="translate(.000001 0.000001)" fill="#40f" stroke="#3f5787" strokeWidth="0.6"/><path d="M132.878636,205.597556l51.364844-35.73767l4.015433,5.775623-51.189271,35.812761-4.191006-5.850714Z" fill="#40f" stroke="#3f5787" strokeWidth="0.6"/><path d="M139.747873,215.591098l51.458909-35.626357l11.082048,15.815606-51.624587,35.791783-10.91637-15.981032Z" transform="translate(.000004 0.000004)" fill="#40f" stroke="#3f5787" strokeWidth="0.6"/><path d="M150,217.319027l40.770261-28.817461l2.982712,4.395465-41.077119,28.601874L150,217.319027Z" transform="translate(.000003 0.000004)" fill="#64f" stroke="#3f5787" strokeWidth="0.6"/><path d="M153.929322,235.839276l13.223272-9.060389l3.865761,5.713758l4.133501-2.775256-3.762314-5.89018l16.006084-11.169474l4.269798,6.04026l3.995165-2.697652-3.995166-6.019172l13.999999-9.789929l7.434111,11.257022-51.527294,35.435746-7.642917-11.044734Z" transform="translate(.000006 0.000006)" fill="#40f" stroke="#3f5787" strokeWidth="0.6"/><path d="M164.569961,251.143534l51.148677-35.552432l4.246811,5.907806-51.356773,35.422693-4.038715-5.778067Z" transform="translate(0 0.000003)" fill="#40f" stroke="#3f5787" strokeWidth="0.6"/><path d="M171.389545,261.194805l51.329362-35.676964l39.933617,57.468779h-76.151742l-15.111237-21.791815Z" transform="translate(.000003 0.000003)" fill="#40f" stroke="#3f5787" strokeWidth="0.6"/><path d="M23.335657,6.344621L96.36084,6.316503v99.587704L165.142004,6.316503h87.065479L159.478819,139.096986l98.55255,141.306577-86.39205-.038736L96.36084,172.011434L94.20763,280.27517l-70.671354-.133507L23.335657,6.344621Z" fill="#0ff" fillOpacity="0.5" strokeWidth="0.6"/>
          </g>
        </motion.svg>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
          <g className="svg-container">
            <motion.path 
              d="M49.200626,17.028118v273.797042h72.82456l.000004-108.130229L197.303667,290.82516h86.392049L185.143167,154.057589L277.871832,17.028118h-87.065479l-68.781164,99.559586.000001-99.559586h-72.824564ZM23.335657,6.344621L96.36084,6.316503v99.587704L165.142004,6.316503h87.065479L159.478819,139.096986l98.55255,141.306577-86.39205-.038736L96.36084,172.011434L94.20763,280.27517l-70.671354-.133507L23.335657,6.344621ZM36.358486,13.577249l72.953601.172467.071582,100.035936L178.164833,13.607256l86.504181.050525-91.416633,132.972467l97.801817,141.034061-86.39205-.089874L109.383669,179.27218v108.353392l-73.025183-.088546v-273.959777ZM40.351382,18.196964l65.10305.009597-.007354,108.69202L180.094039,18.024003l76.231003.207934-88.165043,128.398311l13.382484,19.095679-51.457845,35.781755-24.630206-34.891966-.007354,116.370903h-65.095696v-264.789655ZM132.878636,205.597556l51.364844-35.73767l4.015433,5.775623-51.189271,35.812761-4.191006-5.850714ZM150,217.319027l40.770261-28.817461l2.982712,4.395465-41.077119,28.601874L150,217.319027ZM139.747873,215.591098l51.458909-35.626357l11.082048,15.815606-51.624587,35.791783-10.91637-15.981032ZM153.929322,235.839276l13.223272-9.060389l3.865761,5.713758l4.133501-2.775256-3.762314-5.89018l16.006084-11.169474l4.269798,6.04026l3.995165-2.697652-3.995166-6.019172l13.999999-9.789929l7.434111,11.257022-51.527294,35.435746-7.642917-11.044734ZM164.569961,251.143534l51.148677-35.552432l4.246811,5.907806-51.356773,35.422693-4.038715-5.778067ZM171.389545,261.194805l51.329362-35.676964l39.933617,57.468779h-76.151742l-15.111237-21.791815ZM23.335657,6.344621L96.36084,6.316503v99.587704L165.142004,6.316503h87.065479L159.478819,139.096986l98.55255,141.306577-86.39205-.038736L96.36084,172.011434L94.20763,280.27517l-70.671354-.133507L23.335657,6.344621Z"
              fillOpacity="0%" 
              strokeWidth="1"
              fill="transparent"
              stroke="#7853ff"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 20, ease: "easeIn" }}
            />
          </g>
        </svg>
        </div>

        )}
      </div>
  );
}

export default Logo
