interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <div className='w-full pb-2'>
      <h1 className='relative text-2xl md:text-3xl capitalize pb-2 font-semibold text-white-two'>{title}</h1>
      <span className='h-1 bg-orange-yellow-crayola w-10 absolute z-50 rounded-md'></span>
      <span className='h-1 bg-black w-16 absolute rounded-md'></span>
    </div>
  )
}
