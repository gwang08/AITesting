const Helper = require('@codeceptjs/helper');
const OpenAI = require('openai');

// Khởi tạo đối tượng OpenAI một lần để sử dụng trong helper
const openai = new OpenAI({
  apiKey: 'APIKEY'
});

class AI extends Helper {
  async askForPageObject(description) {
    // Thực hiện request trực tiếp đến API OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo-0125',
      messages: [
        { role: 'system', content: 'You are a helpful assistant that generates page objects for web testing.' },
        { role: 'user', content: `Generate a page object for the following page description: ${description}` }
      ],
    });

    // Trả về nội dung của page object từ kết quả response
    return completion?.choices[0]?.message?.content;
  }
}

module.exports = AI;
