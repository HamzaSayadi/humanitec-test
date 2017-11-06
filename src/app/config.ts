import { Headers  } from '@angular/http';

export const config = new Headers({
  headers:  {
        'Authorization': process.env.HUMANITEC_TOKEN,
    }
});
