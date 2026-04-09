import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto(process.env.BASE_URL || 'https://example.com');
  }

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('#login');
  }
}
