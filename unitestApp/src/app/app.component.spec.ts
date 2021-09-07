import { Author, AuthorService } from './demo.spec';
import { AppComponent } from './app.component';
import { autoSpy } from 'auto-spy';

describe('AppComponent : with scuri depedency test', () => {
  it('when ngOnInit is called it should', () => {
    // arrange
    const { build, service } = setup().default();
    const a = build();
    service.getAuthor.and.returnValue({ name: "test" } as Author);
    // act
    a.ngOnInit();
    // assert
    expect(a.author).toEqual({ name: "test" });
  });

});

function setup() {
  const service = autoSpy(AuthorService);
  const builder = {
    service,
    default() {
      return builder;
    },
    build() {
      return new AppComponent(service);
    }
  };

  return builder;
}
