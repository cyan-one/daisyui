import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  return (
  <main class="bg-gray-100 dark:bg-gray-800 rounded-2xl relative h-screen overflow-hidden relative">
      <div class="flex items-start justify-between">
        <Sidebar />
          {/* Body */}                                    
          <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
              <Header />
                  {/* Components Grid */}                                    
                  <div class="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                      <div class="flex flex-col flex-wrap sm:flex-row ">
                          <div class="w-full sm:w-1/2 xl:w-1/3">
                              <div class="mb-4">
                                {/* GRID ELEMENT 1 */}                                    
                              </div>
                              <div class="mb-4">
                                  {/* GRID ELEMENT 2 */}
                              </div>
                          </div>
                          <div class="w-full sm:w-1/2 xl:w-1/3">
                              <div class="mb-4 mx-0 sm:ml-4 xl:mr-4">
                                  {/* GRID ELEMENT 3 */}
                              </div>
                              <div class="mb-4 sm:ml-4 xl:mr-4">
                                  <div class="shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full">
                                  {/* GRID ELEMENT 4 */}
                                  </div>
                              </div>
                          </div>
                          <div class="w-full sm:w-1/2 xl:w-1/3">
                              <div class="mb-4">
                                    {/* GRID ELEMENT 5 */}
                              </div>
                              <div class="mb-4">
                                    {/* GRID ELEMENT 6 */}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </main>
  );
}

export default App;
