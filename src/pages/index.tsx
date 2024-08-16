import { useState } from 'react';
import { CheckIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { CodeBracketIcon, ChartBarIcon, Cog8ToothIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Digital Transformation',
    description:
      'We transform your analog processes into efficient digital workflows. Our expertise helps streamline operations and boost productivity across your organization.',
    href: '#',
    icon: Cog8ToothIcon,
  },
  {
    name: 'Custom Software Development',
    description:
      'Our team of skilled developers creates tailor-made software solutions to address your unique business challenges and drive growth.',
    href: '#',
    icon: CodeBracketIcon,
  },
  {
    name: 'Process Optimization',
    description:
      'We analyze your existing workflows and implement digital solutions that enhance efficiency, reduce errors, and save valuable time and resources.',
    href: '#',
    icon: ChartBarIcon,
  },
]

const steps = [
  { id: 'Step 1', name: 'Initial Consultation', href: '#', status: 'complete' },
  { id: 'Step 2', name: 'Process Analysis', href: '#', status: 'current' },
  { id: 'Step 3', name: 'Solution Design', href: '#', status: 'upcoming' },
  { id: 'Step 4', name: 'Development & Implementation', href: '#', status: 'upcoming' },
  { id: 'Step 5', name: 'Training & Support', href: '#', status: 'upcoming' },
]

const items = [
  { id: 1, title: 'Streamline Your Workflow', description: 'Our digital solutions help you eliminate manual tasks and focus on what matters most.' },
  { id: 2, title: 'Enhance Data Accuracy', description: 'Digitalization reduces human error and improves the quality of your data.' },
  { id: 3, title: 'Improve Collaboration', description: 'Digital tools foster better communication and teamwork across your organization.' },
  { id: 4, title: 'Increase Productivity', description: 'Automated processes save time and allow your team to accomplish more.' },
  { id: 5, title: 'Gain Valuable Insights', description: 'Digital systems provide actionable data to inform your business decisions.' },
  { id: 6, title: 'Enhance Customer Experience', description: 'Streamlined processes lead to faster, more efficient service for your clients.' },
  { id: 7, title: 'Reduce Operational Costs', description: 'Digitalization cuts expenses associated with paper-based processes and manual labor.' },
  {
    id: 8, title: 'Scale Your Business', description: 'Our digital solutions are designed to grow with your company needs.'
  },
  { id: 9, title: 'Ensure Compliance', description: 'Digital systems help maintain accurate records and meet regulatory requirements.' },
  // More items...
]

const tiers = [
  {
    name: 'Small Business',
    id: 'tier-small-business',
    href: '#',
    price: '$2,500',
    description: 'Perfect for small businesses looking to start their digital transformation journey.',
    features: [
      'Process analysis for up to 3 workflows',
      'Custom software solution for one key process',
      'Basic data migration',
      'User training',
      '30-day post-implementation support',
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    price: 'Custom',
    description: 'Comprehensive digital transformation for large organizations.',
    features: [
      'Full-scale process analysis',
      'Multiple custom software solutions',
      'Advanced data migration and integration',
      'Extensive user and admin training',
      'Ongoing support and maintenance',
      'Dedicated account manager',
    ],
    mostPopular: false,
  },
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'COO of TechInnovate',
    description:
      '"The digital transformation services provided by this agency have revolutionized our operations. Our productivity has increased by 40%, and we have seen a significant reduction in errors.Their expertise in turning our analog processes into streamlined digital workflows has been invaluable."',
  },
  {
    name: 'Michael Chang',
    title: 'CEO of GlobalTrade Solutions',
    description:
      '"Working with this development agency has transformed the way we do business. Their custom software solutions have allowed us to automate complex processes, saving us countless hours and reducing operational costs. The ROI has been phenomenal."',
  },
  {
    name: 'Michael Chang',
    title: 'CEO of GlobalTrade Solutions',
    description:
      '"Working with this development agency has transformed the way we do business. Their custom software solutions have allowed us to automate complex processes, saving us countless hours and reducing operational costs. The ROI has been phenomenal."',
  }
]

const faqs = [
  {
    question: 'What is digital transformation and why is it important?',
    answer:
      'Digital transformation is the process of using digital technologies to create new — or modify existing — business processes, culture, and customer experiences to meet changing business and market requirements. It\'s important because it helps organizations improve efficiency, enhance decision-making, and stay competitive in an increasingly digital world.',
  },
  {
    question: 'How long does a typical digital transformation project take?',
    answer:
      'The duration of a digital transformation project can vary widely depending on the scope and complexity of the processes being transformed. Small projects might take a few months, while large-scale enterprise transformations can take a year or more. We work closely with each client to establish realistic timelines based on their specific needs and goals.',
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We have experience working across various industries, including healthcare, finance, manufacturing, retail, and more. Our team\'s diverse expertise allows us to adapt our digital transformation strategies to meet the unique challenges and regulations of different sectors.',
  }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const [currentStep, setCurrentStep] = useState<number>(0);

  return (
    <div>
      {/* START HERO */}
      <div className="relative isolate overflow-hidden bg-gray-900">
        <svg
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" width="100%" height="100%" strokeWidth={0} />
        </svg>
        <div
          aria-hidden="true"
          className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <img
              alt="Your Company"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              className="h-11"
            />
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <a href="#" className="inline-flex space-x-6">
                <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                  What is new
                </span>
                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                  <span>Just shipped v1.0</span>
                  <ChevronRightIcon aria-hidden="true" className="h-5 w-5 text-gray-500" />
                </span>
              </a>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Deploy to the cloud with confidence
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <img
                alt="App screenshot"
                src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>
      {/* END HERO */}
      {/* START FEATURES */}
      <div className="bg-white py-12 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Stay on top of customer support
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
              accusamus quisquam.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a href={feature.href} className="text-sm font-semibold leading-6 text-indigo-600">
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      { /* END FEATURES */}
      {/* START STEPS */}
      <div className="bg-white px-24 sm:py-32">
        <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
          {steps.map((step, index) => (
            <li key={step.name} className="md:flex-1">
              {index === currentStep ? (
                <a
                  onClick={() => setCurrentStep(index)}
                  aria-current="step"
                  className="flex flex-col border-l-4 border-indigo-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                >
                  <span className="text-sm font-medium text-indigo-600">{step.id}</span>
                  <span className="text-sm font-medium">{step.name}</span>
                </a>
              ) : (
                <a
                  onClick={() => setCurrentStep(index)}
                  className="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                >
                  <span className="text-sm font-medium text-gray-500 group-hover:text-gray-700">{step.id}</span>
                  <span className="text-sm font-medium">{step.name}</span>
                </a>
              )}
            </li>
          ))}
        </ol>
        <div className="bg-white">
          <div className="px-6 py-12 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              {currentStep === 0 &&
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Boost your productivity.
                    <br />
                    Start using our app today.
                  </h2>
                  <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                    Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
                    commodo do ea.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get started
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              }
              {currentStep === 1 &&
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Boost your productivity.
                    <br />
                    Start using our app today.
                  </h2>
                  <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                    Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
                    commodo do ea.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get started
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              }
              {currentStep === 2 &&
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Boost your productivity.
                    <br />
                    Start using our app today.
                  </h2>
                  <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                    Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
                    commodo do ea.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get started
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              }
              {currentStep === 3 &&
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Boost your productivity.
                    <br />
                    Start using our app today.
                  </h2>
                  <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                    Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
                    commodo do ea.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get started
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              }
              {currentStep === 4 &&
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Boost your productivity.
                    <br />
                    Start using our app today.
                  </h2>
                  <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                    Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
                    commodo do ea.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get started
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
      {/* END STEPS */}
      {/* START OFFERINGS */}
      <div className="bg-white px-24 sm:py-32">
            <div className="mx-auto mb-6 max-w-2xl text-center">
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            What we offer
          </p>
            </div>
            <ul
              role="list"
              className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              {items.map((item) => (
                <li
                  key={item.id}
                  className="overflow-hidden rounded-md bg-white px-6 py-4"
                >
                  <div className='text-xl'>{item.title}</div>
                  <div>{item.description}</div>
                </li>
              ))}
            </ul>
      </div>
      {/* END OFFERINGS */}
      {/* START PRICING */}
      <div className="bg-gray-900 py-24 px-12 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8"></div>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Pricing plans for teams of&nbsp;all&nbsp;sizes
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
          Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer
          loyalty, and driving sales.
        </p>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'bg-white/5 ring-2 ring-indigo-500' : 'ring-1 ring-white/10',
                'rounded-3xl p-8 xl:p-10',
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 id={tier.id} className="text-lg font-semibold leading-8 text-white">
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">{tier.price}</span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                    : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                  'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                )}
              >
                Buy plan
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-white" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* END PRICING */}
      {/* START TESTIMONIALS */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            From our customers
          </p>
          <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
                <figure className="mt-10 flex flex-auto flex-col justify-between">
                  <blockquote className="text-lg leading-8 text-gray-900">
                    <p>
                      {testimonial.description}
                    </p>
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-x-6">
                    <div className="text-base">
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="mt-1 text-gray-500">{testimonial.title}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* END TESTIMONIALS */}
      {/* START FAQ */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Can’t find the answer you’re looking for? Reach out to our{' '}
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  customer support
                </a>{' '}
                team.
              </p>
            </div>
            <div className="mt-10 lg:col-span-7 lg:mt-0">
              <dl className="space-y-10">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
      {/* END FAQ */}
    </div>
  )
};
