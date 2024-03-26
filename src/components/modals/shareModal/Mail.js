import React from 'react'
import Link from 'components/base/buttons/Link'

export default function Mail(props) {
  return (
    <Link href={` :?subject=${encodeURI(props.subject)}}`} noIcon aria-label='Envoyer par mail'>
      <svg height='448pt' viewBox='0 0 448 448' width='448pt'>
        <path d='m314.375 144h-180.75l90.375 77.464844zm0 0' />
        <path d='m224 240c-1.910156 0-3.757812-.683594-5.207031-1.929688l-98.792969-84.679687v150.609375h208v-150.609375l-98.792969 84.679687c-1.449219 1.246094-3.296875 1.929688-5.207031 1.929688zm0 0' />
        <path d='m224 0c-123.710938 0-224 100.289062-224 224s100.289062 224 224 224 224-100.289062 224-224c-.140625-123.652344-100.347656-223.859375-224-224zm120 312c0 4.417969-3.582031 8-8 8h-224c-4.417969 0-8-3.582031-8-8v-176c0-4.417969 3.582031-8 8-8h224c4.417969 0 8 3.582031 8 8zm0 0' />
      </svg>
    </Link>
  )
}