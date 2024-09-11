import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
const OpenAI = require('openai');

// turn on headless mode when running with HEADLESS=true environment variable
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

// Cấu hình cho Self-Healing nếu cần cài đặt module heal
require("./heal");

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts', // Đường dẫn đến file test
  output: './output',   // Thư mục lưu trữ kết quả test
  helpers: {
    Playwright: {
      browser: 'chromium',
      channel: 'msedge',
      url: 'http://localhost',
      show: true,
    },
    AI: {
      require: './ai_helper.js'  // Đường dẫn đến file helper AI
    }
  },
  include: {
    I: './steps_file', // Đường dẫn đến file steps
  },
  name: 'Lab',

  ai: {
    request: async (messages) => {
      const openai = new OpenAI({
        apiKey: 'APIKEY'
      });

      // Thực hiện request đến OpenAI API
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo-0125',
        messages: messages,
      });

      return response?.choices[0]?.message?.content;
    }
  },

  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    heal: {
      enabled: true,
    },
    retryFailedStep: {
      enabled: true,
      retries: 3,
    },
    allure: {
      enabled: true,
    },
  },
};
