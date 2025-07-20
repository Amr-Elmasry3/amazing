export default function Details({ blog }) {
  return (
    <div className="details-section">
      <div className="picture relative rounded-one overflow-hidden">
        <img src={blog.img} alt={`img${blog.id}...`} />

        <div className="absolute bottom-0 left-0 flex flex-col">
          <span className="date bg-white text-[15px] text-gray">
            {blog.date}
          </span>

          <span className="count-comments text-[15px] bg-orange text-light-navy">
            {blog.comments.count} Comment
          </span>
        </div>
      </div>

      <h2 className="title font-[600] text-light-navy">{blog.title}</h2>

      <span className="auther text-[14px] font-[600] text-orange">
        {blog.auther}
      </span>

      <ul className="paragraphs">
        <li className="text-[15px] text-dark-gray">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean
          commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque
          penatibus et magnis dis parturient montesti, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eutu, pretiumem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justotuio, rhoncus ut loret,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
          mollis pretium. Intege
        </li>

        <li className="text-[15px] text-dark-gray">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean
          commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque
          penatibus et magnis dis parturient montesti, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eutu, pretiumem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justotuio, rhoncus ut loret,
          imperdiet a, venenatis vitae, justo. Nullam dictum.
        </li>

        <li className="different text-[15px] font-[600] text-light-navy bg-orange rounded-one">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean
          commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque
          penatibus et magnis dis parturient montesti, nascetur ridiculus mus.
          Donec quam felis, ultricies nec,
        </li>

        <li className="text-[15px] text-dark-gray">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli. Aenean
          commodo ligula eget dolor. Aenean massa. Cumtipsu sociis natoque
          penatibus et magnis dis parturient montesti, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eutu, pretiumem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justotuio, rhoncus ut loret,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
          mollis pretium. Integer tincidunt. Cras dapibus.
        </li>
      </ul>

      <ul className="tags flex items-center flex-wrap gap-4">
        {blog.tags.map((item, index) => {
          return (
            <li
              className="tag text-[13px] text-light-navy bg-[#ced4daa1] rounded-one cursor-pointer hover:bg-orange"
              key={index}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
