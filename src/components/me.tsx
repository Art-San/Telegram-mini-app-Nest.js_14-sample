'use client'

import { retrieveLaunchParams } from '@tma.js/sdk'

export function Me() {
  const { initData: data } = retrieveLaunchParams()
  console.log(1, 'data', data?.authDate) // Wed Jul 31 2024 22:38:46 GMT+0700 (Красноярск, стандартное время)
  console.log(2, 'data', data?.hash) // 'e3a9edf0a10f195778080565241f255412b2a1d7f5ecfa1630467f4ee985fae7'
  console.log(3, 'data', data?.queryId) // 'AAHMWgYrAAAAAMxaBivEZk1x'
  console.log(4, 'data', data?.user) // user
  const user = data?.user

  //  const user = {
  //     allowsWriteToPm: true,
  //     firstName: "Александр",
  //     id: 721836748,
  //     languageCode: "ru",
  //     lastName: "А",
  //     username: "gruzz70tomsk"
  //   }

  if (!user) {
    return null
  }

  return (
    <div className="text-sm">
      <code className="font-mono font-bold">@{user.username}</code>
    </div>
  )
}
