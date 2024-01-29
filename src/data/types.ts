type StringDate = `${number}-${number}-${number}`

type Contest = {
  name: string
  description: string
  image: string
  imageType: 'banner' | 'icon'
  submission: {
    begin: StringDate
    end: StringDate
  }
  links: { text: string; url: string }[]
}

export type { Contest, StringDate }
