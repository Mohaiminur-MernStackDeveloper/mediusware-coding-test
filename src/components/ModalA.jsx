import React, { useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const ModalA = ({ isOpenModalA, setIsOpenModalA, OpenModalB }) => {
  const [data, setData] = useState(null);

  function closeModal() {
    setIsOpenModalA(false);
  }

  function openModal() {
    setIsOpenModalA(true);
  }

  //   fetch data from api
  useEffect(() => {
    fetch("https://contact.mediusware.com/api/contacts/")
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);

  return (
    <>
      <Transition appear show={isOpenModalA} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    All Contacts Modal
                  </Dialog.Title>
                  <div className="mt-2">
                    <table>
                      <thead>
                        <tr>
                          <th scope="col">Phone Number</th>
                          <th scope="col">Country</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data && data.map((item)=> {
                            return (<>
                            <tr>
                                <td>{item?.phone}</td>
                                <td>{item?.country?.name}</td>
                            </tr>
                            
                            </>)
                        })}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 space-x-1">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#46139f] px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={openModal}
                    >
                      switch Modal A
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#ff7f50] px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => {
                        closeModal();
                        OpenModalB();
                      }}
                    >
                      switch Modal B
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#46139f] px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      close
                    </button>
                  </div>

                  <div className="text-sm space-x-3 my-2">
                    <input type="checkbox" />
                    <label htmlFor="">Only even</label>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ModalA;
