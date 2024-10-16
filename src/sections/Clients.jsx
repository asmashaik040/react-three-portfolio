import { clientReviews } from "../constants/index.js";

const Clients = () => {
  return (
    <section className="c-space pt-20" id="recognitions">
      <h3 className="head-text">Recognitions</h3>

      <div className="client-container xl:grid-cols-3">
        {clientReviews.map((item) => (
          <div key={`review-${item.id}`} className="client-review">
            <div>
              <img src={item.source} />

              <div className="client-content">
                <div className="flex gap-3">
                  <img
                    src={item.img}
                    alt="reviewer"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{item.name}</p>
                    <p className="text-white-500 md:text-base text-sm font-light">
                      {item.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
