import Image from 'next/image'

const posts = [
  {
    title: 'Family',
    description:
      'My family, is the reason why I work so hard. I want to build a good future for my wife and son and I love spending time with them. We very much enjoy getting outside and exploring the british countryside whenever we can.',
    imageUrl:
      '/img/IMG_2181.jpg',
  },
  {
    title: 'Photography',
    description:
      'I\'ve always had a keen interest in photography, in recent years I pushed to explore this interest more. I invested in better equipment, made myself available for hire and have take some portraits that I\'m incredibly proud of. You can see some of my work at the link attached.',
    imageUrl:
      '/img/IMG_9112.jpg',
    href: 'https://jamesplantphotography.co.uk/',
    hrefName: 'James Plant Photography',
  },
  {
    title: 'Gaming',
    description:
      'So I am guilty of enjoying the odd gaming session. The types of games I play tend to be a mix between racing simulators and RPGs. I still occasionally dip into game development as well.',
    imageUrl:
      '/img/mateo-nCU4yq5xDEQ-unsplash.jpg',
  },
]

export default function Example() {
  return (
    <div className="relative backdrop-invert pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8" id="interests">
      <div className="absolute inset-0">
        <div className="h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-left max-w-prose mx-auto lg:max-w-none">
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl fira-mono">
            &gt; Interests
          </h2>
          <div className="text-base max-w-prose mx-auto lg:max-w-none mt-5">
            <p className="text-lg text-gray-600">
              Who am I outside of work? A healthy work life balance is really important, I&apos;m very conscious of me or
              any of my team burning out, so this is crucial.
            </p>
          </div>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 bg-white">
                <div className="relative">
                  <Image className="h-48 w-full object-cover" src={post.imageUrl} alt="" width={1920} height={1080} />
                </div>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                  <p className="mt-3 mb-3 text-base text-gray-500">{post.description}</p>
                  {post.href && (
                    <a href={post.href} target="_blank" rel="noreferrer" className="mt-3 font-bold inline py-1 text-violet-900 border-transparent border-b hover:border-violet-900 transition-all duration-500">
                      {post.hrefName}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
