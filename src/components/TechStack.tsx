import React, { useState } from 'react'
import {
  SiReact,
  SiAngular,
  SiNextdotjs,
  SiVuedotjs,
  SiFlutter,
  SiKotlin,
  SiHtml5,
  SiSwift,
  SiDotnet,
  SiNodedotjs,
  SiPython,
  SiDjango,
  SiExpress,
  SiRubyonrails,
  SiSpringboot,
  SiPhp,
  SiCplusplus,
  SiOpenjdk,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiPostgresql,
  SiSqlite,
  SiFigma,
  SiSketch,
  SiGo,
  SiApple,
  SiAndroid,
} from '@icons-pack/react-simple-icons'

const TABS = ['FRONTEND', 'BACKEND', 'PLATFORMS', 'DATABASE', 'UI/UX'] as const

const ICON_SIZE = 40
const TEMPLATE_COLOR = '#4f46e5' // indigo-600 - template primary

const TechStackData: Record<(typeof TABS)[number], { name: string; Icon?: React.ComponentType<{ size?: number; color?: string; className?: string }> }[]> = {
  FRONTEND: [
    { name: 'React', Icon: SiReact },
    { name: 'Angular', Icon: SiAngular },
    { name: 'Next.js', Icon: SiNextdotjs },
    { name: 'Vue.js', Icon: SiVuedotjs },
    { name: 'Flutter', Icon: SiFlutter },
    { name: 'Kotlin', Icon: SiKotlin },
    { name: 'HTML5 & CSS3', Icon: SiHtml5 },
    { name: 'Swift', Icon: SiSwift },
    { name: 'Xamarin', Icon: undefined },
    { name: '.NET', Icon: SiDotnet },
  ],
  BACKEND: [
    { name: 'Node.js', Icon: SiNodedotjs },
    { name: 'Python', Icon: SiPython },
    { name: 'Django', Icon: SiDjango },
    { name: 'Express.js', Icon: SiExpress },
    { name: 'Ruby On Rails', Icon: SiRubyonrails },
    { name: 'Spring Boot', Icon: SiSpringboot },
    { name: 'PHP', Icon: SiPhp },
    { name: 'C++', Icon: SiCplusplus },
    { name: 'Java', Icon: SiOpenjdk },
    { name: 'Go', Icon: SiGo },
  ],
  PLATFORMS: [
    { name: 'iOS', Icon: SiApple },
    { name: 'Android', Icon: SiAndroid },
    { name: 'React Native', Icon: SiReact },
    { name: 'Flutter', Icon: SiFlutter },
  ],
  DATABASE: [
    { name: 'MongoDB', Icon: SiMongodb },
    { name: 'MySQL', Icon: SiMysql },
    { name: 'Firebase', Icon: SiFirebase },
    { name: 'PostgreSQL', Icon: SiPostgresql },
    { name: 'SQLite', Icon: SiSqlite },
    { name: 'Oracle', Icon: undefined },
  ],
  'UI/UX': [
    { name: 'Adobe XD', Icon: undefined },
    { name: 'Sketch', Icon: SiSketch },
    { name: 'Figma', Icon: SiFigma },
    { name: 'InVision', Icon: undefined },
    { name: 'Zeplin', Icon: undefined },
  ],
}

function TechIcon({ name, Icon }: { name: string; Icon?: React.ComponentType<{ size?: number; color?: string; className?: string }> }) {
  if (Icon) {
    return <Icon size={ICON_SIZE} color={TEMPLATE_COLOR} />
  }
  return (
    <div className="w-10 h-10 rounded flex items-center justify-center font-semibold text-sm text-indigo-600 bg-indigo-50">
      {name.charAt(0)}
    </div>
  )
}

type TechStackProps = {
  subtitle: string
  headingClassName?: string
  sectionClassName?: string
  contentClassName?: string
}

export default function TechStack({ subtitle, headingClassName = 'text-2xl font-semibold', sectionClassName = 'py-16 bg-white', contentClassName = 'max-w-5xl mx-auto px-4 sm:px-6' }: TechStackProps) {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>('FRONTEND')
  const items = TechStackData[activeTab]

  return (
    <section className={sectionClassName} aria-label="Tech stack">
      <div className={contentClassName}>
        <h2 className={`${headingClassName} text-slate-900 mb-2`}>Tech stack</h2>
        <p className="text-sm text-slate-500 mb-8">{subtitle}</p>

        <nav className="border-b border-slate-200 overflow-x-auto overflow-y-hidden" role="tablist">
          <div className="flex gap-x-4 sm:gap-x-6 gap-y-2 min-w-max pb-px">
            {TABS.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-medium transition-colors relative -mb-px ${
                  activeTab === tab
                    ? 'text-slate-900 border-b-2 border-slate-900'
                    : 'text-slate-600 hover:text-slate-900 border-b-2 border-transparent'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </nav>

        <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6" role="tabpanel">
          {items.map(({ name, Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg bg-slate-50/50 hover:bg-slate-100/50 transition"
            >
              <div className="flex items-center justify-center h-12 w-12 [&>svg]:w-10 [&>svg]:h-10">
                <TechIcon name={name} Icon={Icon} />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-700 text-center break-words">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
