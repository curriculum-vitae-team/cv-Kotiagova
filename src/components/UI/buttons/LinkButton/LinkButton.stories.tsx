import React from 'react'
import 'antd/dist/antd.css'
import LinkButton from './LinkButton'

export default {
  title: 'UI/buttons/LinkButton',
  component: LinkButton,
  argTypes: {
    text: {
      type: 'string',
      defaultValue: 'link'
    },
    block: {
      type: 'boolean',
      description: 'Кнопка растягивается по ширине родителя',
      defaultValue: false
    },
    icon: {
      type: 'ReactNode',
      defaultValue: (
        <svg
          width='12'
          height='16'
          viewBox='0 0 12 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M11.0623 3.35796C10.781 2.74323 10.3812 2.19078 9.87097 1.71868C8.83436 0.756401 7.45825 0.226044 5.99976 0.226044C4.54128 0.226044 3.16517 0.756401 2.12856 1.71667C1.61829 2.19078 1.21851 2.74122 0.937265 3.35796C0.643961 4.00082 0.4953 4.68185 0.4953 5.38497V5.92738C0.4953 6.05194 0.595747 6.15238 0.7203 6.15238H1.80512C1.92968 6.15238 2.03012 6.05194 2.03012 5.92738V5.38497C2.03012 3.38609 3.81003 1.76087 5.99976 1.76087C8.1895 1.76087 9.96941 3.38609 9.96941 5.38497C9.96941 6.20462 9.67811 6.97604 9.12566 7.6189C8.57923 8.25573 7.8078 8.71176 6.95401 8.90462C6.46584 9.01511 6.02588 9.29033 5.7145 9.68408C5.4042 10.0765 5.23507 10.5619 5.23436 11.0622V11.693C5.23436 11.8176 5.33481 11.918 5.45936 11.918H6.54418C6.66874 11.918 6.76918 11.8176 6.76918 11.693V11.0622C6.76918 10.7468 6.98816 10.4696 7.29151 10.4013C8.46472 10.1361 9.52945 9.50328 10.2908 8.61935C10.6745 8.17136 10.9739 7.67314 11.1808 7.13274C11.3957 6.57225 11.5042 5.98363 11.5042 5.38497C11.5042 4.68185 11.3556 3.99881 11.0623 3.35796ZM5.99976 13.5252C5.37901 13.5252 4.87476 14.0294 4.87476 14.6502C4.87476 15.2709 5.37901 15.7752 5.99976 15.7752C6.62052 15.7752 7.12476 15.2709 7.12476 14.6502C7.12476 14.0294 6.62052 13.5252 5.99976 13.5252Z'
            fill='black'
            fill-opacity='0.85'
          />
        </svg>
      )
    }
  }
}

const Template = (arg) => <LinkButton {...arg} />

export const Default = Template.bind({})
Default.args = {
  icon: null
}

export const Icon = Template.bind({})
