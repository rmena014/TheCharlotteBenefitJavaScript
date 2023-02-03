import React from "react";

function MissionStatementInfo() {
  return (
    <div>
      <div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
        <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-blue-900 dark:border-gray-700">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              {" "}
              Guidance
            </h3>
            <p class="my-4 font-light text-white">
              "Empowering and guiding adults in their pursuit of career success
              through non-traditional paths."
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <div class="space-y-0.5 font-medium dark:text-white text-center">
              <div>Richard Mena</div>
              <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                CEO The Charlotte Benefit
              </div>
            </div>
          </figcaption>
        </figure>
        <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Supportive Platform
            </h3>
            <p class="my-4 font-light">
              {" "}
              "Providing a comprehensive and supportive platform with a wide
              range of resources including tutorials, videos, and
              documentation."
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <div class="space-y-0.5 font-medium dark:text-white text-center">
              <div>Carlos Lopez</div>
              <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                Lead Designer at The Charlotte Benefit
              </div>
            </div>
          </figcaption>
        </figure>
        <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Professional Aspiration
            </h3>
            <p class="my-4 font-light">
              "Equipping users with necessary knowledge, skills, and tools to
              navigate today's competitive job market and achieve their
              professional aspirations."
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <div class="space-y-0.5 font-medium dark:text-white text-center">
              <div>Evan Degraffe</div>
              <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                Software Engineer at The Charlotte Benefit
              </div>
            </div>
          </figcaption>
        </figure>
        <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-blue-900 dark:border-gray-700">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Potential Realization
            </h3>
            <p class="my-4 font-light text-white">
              "Dedicated to helping users take control of their career journey
              and reach their full potential."
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <div>Kevin Taylor</div>
              <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                CTO at The Charlotte Benefit
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default MissionStatementInfo;
